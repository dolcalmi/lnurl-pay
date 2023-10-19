# Lnurl-pay

Client library for lnurl-pay and lightning address

## Installation

Install the package with:

```bash
npm i lnurl-pay
# or
yarn add lnurl-pay
```

## Usage

### LNURL

```js
import { requestInvoice, utils } from 'lnurl-pay'

const {
  invoice,
  params,
  rawData,
  successAction,
  hasValidAmount,
  hasValidDescriptionHash,
  validatePreimage,
} = await requestInvoice({
  lnUrlOrAddress:
    'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
  tokens: 333, // in TS you can use utils.checkedToSats or utils.toSats
})
```

### Lightning Address

```js
import { requestInvoice, utils } from 'lnurl-pay'

const {
  invoice,
  params,
  rawData,
  successAction,
  hasValidAmount,
  hasValidDescriptionHash,
  validatePreimage,
} = await requestInvoice({
  lnUrlOrAddress: 'user@domain.com',
  tokens: 333, // in TS you can use utils.checkedToSats or utils.toSats
})
```

### Lnurlp / [LUD-17](https://github.com/lnurl/luds/blob/luds/17.md)

```js
import { requestInvoice, utils } from 'lnurl-pay'

const {
  invoice,
  params,
  rawData,
  successAction,
  hasValidAmount,
  hasValidDescriptionHash,
  validatePreimage,
} = await requestInvoice({
  lnUrlOrAddress: 'lnurlp://domain.com/path',
  tokens: 333, // in TS you can use utils.checkedToSats or utils.toSats
})
```

## Methods

- [requestInvoice](#requestInvoice) - Request an invoice for lnurl o lightning address
- [requestPayServiceParams](#requestPayServiceParams) - Request pay service params (1st step)
- [requestInvoiceWithServiceParams](#requestInvoiceWithServiceParams) - Request an invoice for lnurl o lightning address with the given [service params](#requestPayServiceParams) (2nd step)

### requestInvoice

Request an invoice for lnurl o lightning address

```
{
  lnUrlOrAddress: <Bech32 encoded url (lnurl) or lightning address String>
  tokens: <Amount in satoshis Number>
  [comment]: <Comment String>
  [onionAllowed]: <Onion url allowed Bool> // Default to false
  [validateInvoice]: <If true validates the invoice amount and description hash Bool> // Default to false
  [fetchGet]: <Function to make a GET request Function> // Default to axios get
}

@throws <Error>

@returns
{
  invoice: <Invoice returned by pay service String>
  successAction: <Success action defined by lnurl-rfc Object>
  params: {
    callback: <Url used to request the invoice String>
    fixed: <Indicates if amount must be a fixed amount Bool>
    min: <Min amount in satoshis Number>
    max: <Max amount in satoshis Number>
    domain: <Callback domain String>
    metadata: <Decoded metadata Array>
    metadataHash: <Metadata hash String>
    identifier: <Metadata identifier String>
    description: <Metadata description String>
    image: <Metadata base64 image String>
    commentAllowed: <Number of characters accepted for the comment query parameter Number> // Default to 0 - not allowed
  }
  rawData: <Raw data response Object>
  hasValidAmount: <True if the returned invoice amount is equal to tokens param Bool>
  hasValidDescriptionHash: <True if the returned invoice description hash is equal to metadata hash Bool>
  validatePreimage: <validates if preimage param is valid for invoice Function> // (preimage: string) => boolean
}
```

Example:

```node
const { invoice, params, successAction } = await requestInvoice({
  lnUrlOrAddress:
    'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
  tokens: 333,
})
```

### requestPayServiceParams

Request pay service params for lnurl o lightning address (1st step)

```
{
  lnUrlOrAddress: <Bech32 encoded url (lnurl) or lightning address String>
  [onionAllowed]: <Onion url allowed Bool> // Default to false
  [fetchGet]: <Function to make a GET request Function> // Default to axios get
}

@throws <Error>

@returns
{
  callback: <Url used to request the invoice String>
  fixed: <Indicates if amount must be a fixed amount Bool>
  min: <Min amount in satoshis Number>
  max: <Max amount in satoshis Number>
  domain: <Callback domain String>
  metadata: <Decoded metadata Array>
  metadataHash: <Metadata hash String>
  identifier: <Metadata identifier String>
  description: <Metadata description String>
  image: <Metadata base64 image String>
  commentAllowed: <Number of characters accepted for the comment query parameter Number> // Default to 0 - not allowed
}
```

Example:

```node
const params = await requestPayServiceParams({
  lnUrlOrAddress:
    'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
})
```

### requestInvoiceWithServiceParams

Request an invoice for lnurl o lightning address with the given service params (2nd step)

```
{
  params: {
    callback: <Url used to request the invoice String>
    fixed: <Indicates if amount must be a fixed amount Bool>
    min: <Min amount in satoshis Number>
    max: <Max amount in satoshis Number>
    domain: <Callback domain String>
    metadata: <Decoded metadata Array>
    metadataHash: <Metadata hash String>
    identifier: <Metadata identifier String>
    description: <Metadata description String>
    image: <Metadata base64 image String>
    commentAllowed: <Number of characters accepted for the comment query parameter Number> // Default to 0 - not allowed
  }
  tokens: <Amount in satoshis Number>
  [comment]: <Comment String>
  [onionAllowed]: <Onion url allowed Bool> // Default to false
  [validateInvoice]: <If true validates the invoice amount and description hash Bool> // Default to false
  [fetchGet]: <Function to make a GET request Function> // Default to axios get
}

@throws <Error>

@returns
{
  invoice: <Invoice returned by pay service String>
  successAction: <Success action defined by lnurl-rfc Object>
  params: {
    callback: <Url used to request the invoice String>
    fixed: <Indicates if amount must be a fixed amount Bool>
    min: <Min amount in satoshis Number>
    max: <Max amount in satoshis Number>
    domain: <Callback domain String>
    metadata: <Decoded metadata Array>
    metadataHash: <Metadata hash String>
    identifier: <Metadata identifier String>
    description: <Metadata description String>
    image: <Metadata base64 image String>
    commentAllowed: <Number of characters accepted for the comment query parameter Number> // Default to 0 - not allowed
  }
  hasValidAmount: <True if the returned invoice amount is equal to tokens param>
  hasValidDescriptionHash: <True if the returned invoice description hash is equal to metadata hash>
  validatePreimage: <validates if preimage param is valid for invoice Function> // (preimage: string) => boolean
}
```

Example:

```node
const params = await requestInvoiceWithServiceParams({
  params,
  tokens: 333,
})
```

## Utils

- [decodeUrlOrAddress](#decodeUrlOrAddress) - Decode a bech32 encoded url (lnurl) or lightning address and return a url
- [isLnurl](#isLnurl) - Verify if a string is a valid lnurl value
- [isLnurlp](#isLnurlp) - Verify if a string is a valid lnurlp url
- [parseLnUrl](#parseLnUrl) - Parse an url and return a bech32 encoded url (lnurl)
- [parseLnurlp](#parseLnurlp) - Parse a lnurlp url and return an url with the proper protocol
- [isLightningAddress](#isLightningAddress) - Verify if a string is a lightning adress
- [parseLightningAddress](#parseLightningAddress) - Parse an address and return username and domain
- [isOnionUrl](#isOnionUrl) - Verify if a string is an onion url
- [getHashFromInvoice](#getHashFromInvoice) - Decodes an invoice(string) and get the hash
- [isValidPreimage](#isValidPreimage) - Returns true if the given preimage is valid for invoice
- [decipherAES](#decipherAES) - Decipher ciphertext with a preimage

## Test

Test with Jest framework:

```bash
yarn test
```

## Build

Build production (distribution) files in **dist** folder:

```bash
yarn build
```

It generates CommonJS (in **dist/cjs** folder), ES Modules (in **dist/esm** folder), bundled and minified UMD (in **dist/umd** folder), as well as TypeScript declaration files (in **dist/types** folder).

## Local development

Run:

```bash
yarn link
# or
npm link
```

and in your test project run:

```bash
yarn link lnurl-pay
# or
npm link lnurl-pay
```

If you want to remove the symlink, run:

```bash
# in your test project
yarn unlink lnurl-pay
# or
npm unlink lnurl-pay

# in lnurl-pay folder
yarn unlink
# or
npm unlink
```

Please check more details in [npm link](https://docs.npmjs.com/cli/v6/commands/npm-link) or [yarn link](https://yarnpkg.com/cli/link)

## References

This library was developed based on:

- [lnurl-rfc](https://github.com/fiatjaf/lnurl-rfc)
- [js-lnurl](https://github.com/fiatjaf/js-lnurl)
- [Lightning Address](https://github.com/andrerfneves/lightning-address)
- [BlueWallet](https://github.com/BlueWallet/BlueWallet)
- [Example TypeScript Package ](https://github.com/tomchen/example-typescript-package)
