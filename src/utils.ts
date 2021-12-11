import { bech32 } from 'bech32'
import type { LightningAddress } from './types'

const LNURL_REGEX =
  /^(?:http.*[&?]lightning=|lightning:)?(lnurl1[02-9ac-hj-np-z]+)/

const LN_ADDRESS_REGEX =
  /^((?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@((?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/**
 * Decode a bech32 encoded url (lnurl) or lightning address and return a url
 * @method decodeUrlOrAddress
 * @param  urlOrAddress string to decode
 * @return  plain url or null if is an invalid url or lightning address
 */
export const decodeUrlOrAddress = (urlOrAddress: string): string | null => {
  const bech32Url = parseLnUrl(urlOrAddress)
  if (bech32Url) {
    const decoded = bech32.decode(bech32Url, 20000)
    return Buffer.from(bech32.fromWords(decoded.words)).toString()
  }

  const address = parseLightningAddress(urlOrAddress)
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
  return LN_ADDRESS_REGEX.test(address.toLowerCase())
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
  const result = LN_ADDRESS_REGEX.exec(address.toLowerCase())
  return result ? { username: result[1], domain: result[2] } : null
}
