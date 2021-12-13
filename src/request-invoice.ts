import { getJson, isOnionUrl, isUrl, isValidAmount } from './utils'
import type {
  LnUrlRequestInvoiceArgs,
  LnUrlRequestInvoiceResponse,
  LnUrlRequestInvoiceWithServieResponseArgs,
} from './types'
import { requestPayServiceParams } from './request-pay-service-params'

export const requestInvoiceWithServieResponse = async ({
  params,
  amount,
  comment,
  onionAllowed = false,
  fetchGet = getJson,
}: LnUrlRequestInvoiceWithServieResponseArgs): Promise<LnUrlRequestInvoiceResponse> => {
  const { callback, commentAllowed, min, max } = params
  if (!isValidAmount({ amount, min, max })) throw new Error('Invalid amount')

  if (!isUrl(callback)) throw new Error('Callback must be a valid url')
  if (!onionAllowed && isOnionUrl(callback))
    throw new Error('Onion requests not allowed')

  const invoiceParams: { amount: number; comment?: string } = {
    amount: amount * 1000,
  }

  if (comment && commentAllowed > 0 && comment.length > commentAllowed)
    throw new Error(
      `The comment length must be ${commentAllowed} characters or fewer`
    )
  if (comment) invoiceParams.comment = comment

  const data = await fetchGet({ url: callback, params: invoiceParams })
  const invoice = data && data.pr && data.pr.toString()
  if (!invoice) throw new Error('Invalid pay service invoice')

  return {
    params,
    invoice,
    successAction: data.successAction,
  }
}

export const requestInvoice = async ({
  lnUrlOrAddress,
  amount,
  comment,
  onionAllowed = false,
  fetchGet = getJson,
}: LnUrlRequestInvoiceArgs): Promise<LnUrlRequestInvoiceResponse> => {
  const params = await requestPayServiceParams({
    lnUrlOrAddress,
    onionAllowed,
    fetchGet,
  })
  return requestInvoiceWithServieResponse({
    params,
    amount,
    comment,
    onionAllowed,
    fetchGet,
  })
}
