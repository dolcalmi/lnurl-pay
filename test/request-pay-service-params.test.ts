import axios from 'axios'
import { validPayServiceParams } from './helper'
import { requestPayServiceParams } from '../src/request-pay-service-params'

jest.mock('axios')

describe('requestPayServiceParams', () => {
  test.each(validPayServiceParams)(
    '$lnUrlOrAddress returns valid params',
    async ({ lnUrlOrAddress, data, expected }) => {
      axios.get = jest.fn().mockResolvedValueOnce({ data })
      const result = await requestPayServiceParams({ lnUrlOrAddress })
      expect(result).toMatchObject(expected)
    }
  )
})
