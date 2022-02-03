declare const satoshisSymbol: unique symbol
export type Satoshis = number & { [satoshisSymbol]: never }

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
type Json = { [key: string]: any }

export type LightningAddress = {
  username: string
  domain: string
}

export type LNURLPaySuccessAction = {
  tag: string
  description: string | null
  url: string | null
  message: string | null
  ciphertext: string | null
  iv: string | null
  decipher: (preimage: string) => string | null
}

export type FetcGetArgs = {
  url: string
  params?: Json
}

export type LnUrlPayServiceArgs = {
  lnUrlOrAddress: string
  onionAllowed?: boolean
  fetchGet?: (args: FetcGetArgs) => Promise<Json>
}

export type LnUrlPayServiceResponse = {
  callback: string
  fixed: boolean
  min: Satoshis
  max: Satoshis
  domain?: string
  metadata: Array<Array<string>>
  identifier: string
  description: string
  image: string
  commentAllowed: number
}

export type LnUrlRequestInvoiceBaseArgs = {
  tokens: Satoshis
  comment?: string
  onionAllowed?: boolean
  fetchGet?: (args: FetcGetArgs) => Promise<Json>
}

export type LnUrlrequestInvoiceWithServiceParamsArgs =
  LnUrlRequestInvoiceBaseArgs & {
    params: LnUrlPayServiceResponse
  }

export type LnUrlRequestInvoiceArgs = LnUrlRequestInvoiceBaseArgs & {
  lnUrlOrAddress: string
}

export type LnUrlRequestInvoiceResponse = {
  params: LnUrlPayServiceResponse
  invoice: string
  successAction?: LNURLPaySuccessAction
}
