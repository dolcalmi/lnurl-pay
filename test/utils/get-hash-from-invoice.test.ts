import { getHashFromInvoice } from '../../src/utils'
import { validInvoices, invalidInvoices } from './helper'

describe('getHashFromInvoice', () => {
  test.each(validInvoices)(
    'decodes $invoice and get a valid hash',
    ({ invoice, hash }) => {
      expect(getHashFromInvoice(invoice)).toBe(hash)
    }
  )

  test.each(invalidInvoices)('%s return null', (invoice) => {
    expect(getHashFromInvoice(invoice)).toBeFalsy()
  })
})
