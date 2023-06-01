import { isLnurlp, parseLnurlp } from '../../src/utils'
import { invalidLnUrlps, validLnUrlps } from './helper'

describe('isLnurlp', () => {
  test.each(validLnUrlps)('%s is valid LnUrl', (url) => {
    expect(isLnurlp(url)).toBeTruthy()
  })

  test.each(invalidLnUrlps)('%s is invalid LnUrl', (url) => {
    expect(isLnurlp(url)).toBeFalsy()
  })
})

describe('parseLnurlp', () => {
  test.each(validLnUrlps)('%s is valid LnUrl', (lnurl) => {
    const protocol = lnurl.includes('.onion') ? 'http://' : 'https://'
    expect(parseLnurlp(lnurl)).toBe(lnurl.replace('lnurlp://', protocol))
  })

  test.each(invalidLnUrlps)('%s is invalid LnUrl', (lnurl) => {
    expect(parseLnurlp(lnurl)).toBe(null)
  })
})
