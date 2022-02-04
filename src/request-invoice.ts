import {
  decipherAES,
  getJson,
  isOnionUrl,
  isUrl,
  isValidAmount,
  isValidPreimage,
} from './utils'
import type {
  LNURLPaySuccessAction,
  LnUrlRequestInvoiceArgs,
  LnUrlRequestInvoiceResponse,
  LnUrlrequestInvoiceWithServiceParamsArgs,
} from './types'
import { requestPayServiceParams } from './request-pay-service-params'

export const requestInvoiceWithServiceParams = async ({
  params,
  tokens,
  comment,
  onionAllowed = false,
  fetchGet = getJson,
}: LnUrlrequestInvoiceWithServiceParamsArgs): Promise<LnUrlRequestInvoiceResponse> => {
  const { callback, commentAllowed, min, max } = params
  if (!isValidAmount({ amount: tokens, min, max }))
    throw new Error('Invalid amount')

  if (!isUrl(callback)) throw new Error('Callback must be a valid url')
  if (!onionAllowed && isOnionUrl(callback))
    throw new Error('Onion requests not allowed')

  const invoiceParams: { amount: number; comment?: string } = {
    amount: tokens * 1000,
  }

  if (comment && commentAllowed > 0 && comment.length > commentAllowed)
    throw new Error(
      `The comment length must be ${commentAllowed} characters or fewer`
    )
  if (comment) invoiceParams.comment = comment

  const data = await fetchGet({ url: callback, params: invoiceParams })
  const invoice = data && data.pr && data.pr.toString()
  if (!invoice) throw new Error('Invalid pay service invoice')

  let successAction: LNURLPaySuccessAction | undefined = undefined
  if (data.successAction) {
    const decipher = (preimage: string): string | null =>
      decipherAES({ preimage, successAction: data.successAction })
    successAction = Object.assign({ decipher }, data.successAction)
  }

  return {
    params,
    invoice,
    successAction,
    isValidPreimage: (preimage: string): boolean =>
      isValidPreimage({ invoice, preimage }),
  }
}

export const requestInvoice = async ({
  lnUrlOrAddress,
  tokens,
  comment,
  onionAllowed = false,
  fetchGet = getJson,
}: LnUrlRequestInvoiceArgs): Promise<LnUrlRequestInvoiceResponse> => {
  const params = await requestPayServiceParams({
    lnUrlOrAddress,
    onionAllowed,
    fetchGet,
  })
  return requestInvoiceWithServiceParams({
    params,
    tokens,
    comment,
    onionAllowed,
    fetchGet,
  })
}
