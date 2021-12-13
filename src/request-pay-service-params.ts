import type { LnUrlPayServiceArgs, LnUrlPayServiceResponse } from './types'
import {
  decodeUrlOrAddress,
  isOnionUrl,
  checkedToSats,
  getJson,
  isUrl,
} from './utils'

const TAG_PAY_REQUEST = 'payRequest'

export const requestPayServiceParams = async ({
  lnUrlOrAddress,
  onionAllowed = false,
  fetchGet = getJson,
}: LnUrlPayServiceArgs): Promise<LnUrlPayServiceResponse> => {
  const url = decodeUrlOrAddress(lnUrlOrAddress)
  if (!isUrl(url)) throw new Error('Invalid lnUrlOrAddress')
  if (!onionAllowed && isOnionUrl(url))
    throw new Error('Onion requests not allowed')

  const json = await fetchGet({ url })
  const params = parseLnUrlPayServiceResponse(json)
  if (!params) throw new Error('Invalid pay service params')

  return params
}

/**
 * Parse the ln service response to LnUrlPayServiceResponse
 * @method parseLnUrlPayServiceResponse
 * @param  data object to parse
 * @return  LnUrlPayServiceResponse
 */
const parseLnUrlPayServiceResponse = (data: {
  [key: string]: string | number
}): LnUrlPayServiceResponse | null => {
  if (data.tag !== TAG_PAY_REQUEST) return null

  const callback = (data.callback + '').trim()
  if (!isUrl(callback)) return null

  const min = checkedToSats(Math.ceil(Number(data.minSendable || 0) / 1000))
  const max = checkedToSats(Math.floor(Number(data.maxSendable) / 1000))
  if (!(min && max) || min > max) return null

  let metadata: Array<Array<string>>
  try {
    metadata = JSON.parse(data.metadata + '')
  } catch {
    metadata = []
  }

  let image = ''
  let description = ''
  let identifier = ''
  for (let i = 0; i < metadata.length; i++) {
    const [k, v] = metadata[i]
    switch (k) {
      case 'text/plain':
        description = v
        break
      case 'text/identifier':
        identifier = v
        break
      case 'image/png;base64':
      case 'image/jpeg;base64':
        image = 'data:' + k + ',' + v
        break
    }
  }

  const domainMatch = callback.match(/(?:[A-Za-z0-9-]+\.)+[A-Za-z0-9]{1,3}/)
  return {
    callback,
    fixed: min === max,
    min,
    max,
    domain: (domainMatch && domainMatch[0]) || undefined,
    metadata: metadata,
    identifier,
    description,
    image,
    commentAllowed: Number(data.commentAllowed) || 0,
  }
}
