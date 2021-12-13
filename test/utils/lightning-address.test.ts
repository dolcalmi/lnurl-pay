import { isLightningAddress, parseLightningAddress } from '../../src/utils'
import { invalidLnAddresses, validLnAddresses } from './helper'

describe('isLightningAddress', () => {
  test.each(validLnAddresses)('%s is valid lightning address', (address) => {
    expect(isLightningAddress(address)).toBeTruthy()
  })

  test.each(invalidLnAddresses)(
    '%s is invalid lightning address',
    (address) => {
      expect(isLightningAddress(address)).toBeFalsy()
    }
  )
})

describe('parseLightningAddress', () => {
  test.each(validLnAddresses)('%s is valid lightning address', (address) => {
    const [username, domain] = address.split('@')
    expect(parseLightningAddress(address)).toStrictEqual({ username, domain })
  })

  test.each(invalidLnAddresses)(
    '%s is invalid lightning address',
    (address) => {
      expect(parseLightningAddress(address)).toBe(null)
    }
  )
})
