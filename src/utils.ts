import isURL from 'is-url'
import { bech32 } from 'bech32'
import axios from 'axios'
import aesjs from 'aes-js'
import Base64 from 'base64-js'
import * as bolt11 from 'bolt11'
import { Sha256 } from '@aws-crypto/sha256-js'

import type { LightningAddress, LNURLPaySuccessAction, Satoshis } from './types'

const LNURL_REGEX =
  /^(?:http.*[&?]lightning=|lightning:)?(lnurl[0-9]{1,}[02-9ac-hj-np-z]+)/

const LN_ADDRESS_REGEX =
  /^((?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@((?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ONION_REGEX = /^(http:\/\/[^/:@]+\.onion(?::\d{1,5})?)(\/.*)?$/

/**
 * Decode a bech32 encoded url (lnurl) or lightning address and return a url
 * @method decodeUrlOrAddress
 * @param  lnUrlOrAddress string to decode
 * @return  plain url or null if is an invalid url or lightning address
 */
export const decodeUrlOrAddress = (lnUrlOrAddress: string): string | null => {
  const bech32Url = parseLnUrl(lnUrlOrAddress)
  if (bech32Url) {
    const decoded = bech32.decode(bech32Url, 20000)
    return Buffer.from(bech32.fromWords(decoded.words)).toString()
  }

  const address = parseLightningAddress(lnUrlOrAddress)
  if (address) {
    const { username, domain } = address
    const protocol = domain.match(/\.onion$/) ? 'http' : 'https'
    return `${protocol}://${domain}/.well-known/lnurlp/${username}`
  }

  return null
}

/**
 * Parse an url and return a bech32 encoded url (lnurl)
 * @method parseLnUrl
 * @param  url string to parse
 * @return  bech32 encoded url (lnurl) or null if is an invalid url
 */
export const parseLnUrl = (url: string): string | null => {
  if (!url) return null
  const result = LNURL_REGEX.exec(url.toLowerCase())
  return result ? result[1] : null
}

/**
 * Verify if a string is a valid lnurl value
 * @method isLnurl
 * @param  url string to validate
 * @return  true if is a valid lnurl value
 */
export const isLnurl = (url: string): boolean => {
  if (!url) return false
  return LNURL_REGEX.test(url.toLowerCase())
}

/**
 * Verify if a string is a lightning adress
 * @method isLightningAddress
 * @param  address string to validate
 * @return  true if is a lightning address
 */
export const isLightningAddress = (address: string): boolean => {
  if (!address) return false
  return LN_ADDRESS_REGEX.test(address)
}

/**
 * Parse an address and return username and domain
 * @method parseLightningAddress
 * @param  address string to parse
 * @return  LightningAddress { username, domain }
 */
export const parseLightningAddress = (
  address: string
): LightningAddress | null => {
  if (!address) return null
  const result = LN_ADDRESS_REGEX.exec(address)
  return result ? { username: result[1], domain: result[2] } : null
}

/**
 * Verify if a string is an url
 * @method isUrl
 * @param  url string to validate
 * @return  true if is an url
 */
export const isUrl = (url: string | null): url is string => {
  if (!url) return false
  try {
    return isURL(url)
  } catch {
    return false
  }
}

/**
 * Verify if a string is an onion url
 * @method isOnionUrl
 * @param  url string to validate
 * @return  true if is an onion url
 */
export const isOnionUrl = (url: string | null): boolean => {
  return isUrl(url) && ONION_REGEX.test(url.toLowerCase())
}

/**
 * Parse a number to Satoshis
 * @method checkedToSats
 * @param  value number to parse
 * @return  Satoshis or null
 */
export const checkedToSats = (value: number): Satoshis | null => {
  if (value && value >= 0) return toSats(value)
  return null
}

/**
 * Cast a number to Satoshis type
 * @method toSats
 * @param  value number to cast
 * @return  Satoshis
 */
export const toSats = (value: number): Satoshis => {
  return value as Satoshis
}

export const isValidAmount = ({
  amount,
  min,
  max,
}: {
  amount: number
  min: number
  max: number
}): boolean => {
  const isValid = amount > 0 && amount >= min && amount <= max
  const isFixed = min === max
  return isValid && isFixed ? amount === min : isValid
}

export const getJson = async ({
  url,
  params,
}: {
  url: string
  params?: { [key: string]: string | number }
}): Promise<{ [key: string]: string | number }> => {
  return axios.get(url, { params }).then((response) => {
    if (response.data.status === 'ERROR')
      throw new Error(response.data.reason + '')
    return response.data
  })
}

export const sha256 = (data: string, encoding: BufferEncoding = 'hex') => {
  const sha256 = new Sha256()
  sha256.update(Buffer.from(data, encoding))
  return Buffer.from(sha256.digestSync()).toString('hex')
}

export const decodeInvoice = (
  invoice: string
): (bolt11.PaymentRequestObject & { tagsObject: bolt11.TagsObject }) | null => {
  if (!invoice) return null

  try {
    let network: bolt11.Network | undefined = undefined
    // hack to support signet invoices, remove when it is supported in bolt11
    if (invoice.startsWith('lntbs')) {
      network = {
        bech32: 'tbs',
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        validWitnessVersions: [0, 1],
      }
    }

    return bolt11.decode(invoice, network)
  } catch {
    return null
  }
}

export const getHashFromInvoice = (invoice: string): string | null => {
  if (!invoice) return null

  try {
    const decoded = decodeInvoice(invoice)
    if (!decoded || !decoded.tags) return null

    const hashTag = decoded.tags.find(
      (value) => value.tagName === 'payment_hash'
    )
    if (!hashTag || !hashTag.data) return null

    return hashTag.data.toString()
  } catch {
    return null
  }
}

export const isValidPreimage = ({
  invoice,
  preimage,
}: {
  invoice: string
  preimage: string
}): boolean => {
  if (!invoice || !preimage) return false

  const invoiceHash = getHashFromInvoice(invoice)
  if (!invoiceHash) return false

  try {
    const preimageHash = sha256(preimage)
    return invoiceHash === preimageHash
  } catch {
    return false
  }
}

export const decipherAES = ({
  successAction,
  preimage,
}: {
  successAction: LNURLPaySuccessAction
  preimage: string
}): string | null => {
  if (
    successAction.tag !== 'aes' ||
    !successAction.iv ||
    !successAction.ciphertext ||
    !preimage
  )
    return null

  const key = aesjs.utils.hex.toBytes(preimage)
  const iv = Base64.toByteArray(successAction.iv)
  const ciphertext = Base64.toByteArray(successAction.ciphertext)

  const cbc = new aesjs.ModeOfOperation.cbc(key, iv)
  let plaintext = cbc.decrypt(ciphertext)

  // remove padding
  const size = plaintext.length
  const pad = plaintext[size - 1]
  plaintext = plaintext.slice(0, size - pad)

  return aesjs.utils.utf8.fromBytes(plaintext)
}
