import { isValidPreimage } from '../../src/utils'
import { validInvoices, invalidInvoices } from './helper'

describe('isValidPreimage', () => {
  test.each(validInvoices)(
    '$preimage is valid for $invoice',
    ({ invoice, preimage }) => {
      expect(isValidPreimage({ invoice, preimage })).toBeTruthy()
    }
  )

  test.each(validInvoices)('%s return false', ({ invoice }) => {
    expect(isValidPreimage({ invoice, preimage: 'some preimage' })).toBeFalsy()
  })

  test.each(invalidInvoices)('%s return false', (invoice) => {
    expect(isValidPreimage({ invoice, preimage: 'some preimage' })).toBeFalsy()
  })
})
