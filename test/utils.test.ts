import { isLightningAddress, parseLightningAddress } from '../src/utils'

const validLnAddresses = [
  'user@domain.com',
  'user.name@domain.com',
  'u@sub.domain.com',
]
const invalidLnAddresses = [
  ' user@domain.com',
  'user@domain.com ',
  'user @domain.com',
  'user@ domain.com',
  'user@domain. com',
  'user@domain',
  'user@dom@ain.com',
  '@domain',
  'user@',
  '@',
  'word',
  'user@facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion,',
]

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
