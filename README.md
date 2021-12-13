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
``` js
import { requestInvoice } from 'lnurl-pay'

const { invoice, params, successAction } = await requestInvoice({
  lnUrlOrAddress: 'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
  amount: 333, // satoshis
})
```

### Lightning Address
``` js
import { requestInvoice } from 'lnurl-pay'

const { invoice, params, successAction } = await requestInvoice({
  lnUrlOrAddress: 'user@domain.com',
  amount: 333, // satoshis
})
```

## Methods

- [requestInvoice](#requestInvoice) - Request an invoice for lnurl o lightning address
- [requestPayServiceParams](#requestPayServiceParams) - Request pay service params (1st step)
- [requestInvoiceWithServiceParams](#requestInvoiceWithServiceParams) - Request an invoice for lnurl o lightning address with the given [service params](#requestPayServiceParams) (2nd step)
- [decodeUrlOrAddress](#decodeUrlOrAddress) - Decode a bech32 encoded url (lnurl) or lightning address and return a url
- [isLnurl](#isLnurl) - Verify if a string is a valid lnurl value
- [parseLnUrl](#parseLnUrl) - Parse an url and return a bech32 encoded url (lnurl)
- [isLightningAddress](#isLightningAddress) - Verify if a string is a lightning adress
- [parseLightningAddress](#parseLightningAddress) - Parse an address and return username and domain
- [isOnionUrl](#isOnionUrl) - Verify if a string is an onion url
