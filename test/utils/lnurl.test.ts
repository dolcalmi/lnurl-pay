import { isLnurl, parseLnUrl } from '../../src/utils'
import { defaultBech32Url, invalidLnUrls, validLnUrls } from './helper'

describe('isLnurl', () => {
  test.each(validLnUrls)('%s is valid LnUrl', (address) => {
    expect(isLnurl(address)).toBeTruthy()
  })

  test.each(invalidLnUrls)('%s is invalid LnUrl', (address) => {
    expect(isLnurl(address)).toBeFalsy()
  })
})

describe('parseLnUrl', () => {
  test.each(validLnUrls)('%s is valid LnUrl', (lnurl) => {
    expect(parseLnUrl(lnurl)).toBe(defaultBech32Url)
  })

  test.each(invalidLnUrls)('%s is invalid LnUrl', (lnurl) => {
    expect(parseLnUrl(lnurl)).toBe(null)
  })
})
