import axios from 'axios'
import { toSats } from '../src/utils'
import { validPayServiceParams } from './helper'
import { requestInvoice } from '../src/request-invoice'

jest.mock('axios')

describe('requestInvoice', () => {
  test.each(validPayServiceParams)(
    '$lnUrlOrAddress returns a valid invoice',
    async ({
      lnUrlOrAddress,
      tokens,
      serviceParams,
      serviceParamsExpected,
      serviceInvoice,
    }) => {
      axios.get = jest
        .fn()
        .mockResolvedValueOnce({ data: serviceParams })
        .mockResolvedValueOnce({ data: serviceInvoice })
      const result = await requestInvoice({
        lnUrlOrAddress,
        tokens: toSats(tokens),
      })
      expect(result).toMatchObject({
        invoice: serviceInvoice.pr,
        successAction: serviceInvoice.successAction,
        params: { ...serviceParamsExpected },
      })
    }
  )

  test.each(validPayServiceParams)(
    '$lnUrlOrAddress throws with invalid amount',
    async ({
      lnUrlOrAddress,
      serviceParams,
      serviceInvoice,
    }) => {
      axios.get = jest
        .fn()
        .mockResolvedValueOnce({ data: serviceParams })
        .mockResolvedValueOnce({ data: serviceInvoice })

      await expect(async () => {
        await requestInvoice({ lnUrlOrAddress, tokens: toSats(5000000) })
      }).rejects.toThrowError('Invalid amount')
    }
  )
})
