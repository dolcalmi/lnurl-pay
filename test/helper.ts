export const validPayServiceParams = [
  {
    lnUrlOrAddress:
      'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
    data: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user0',
      minSendable: 1000,
      maxSendable: 500000000,
      metadata:
        '[["text/plain","Payment to user0"],["text/identifier","user0@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    expected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user0',
      commentAllowed: 0,
      description: 'Payment to user0',
      domain: 'pay.staging.galoy.io',
      fixed: false,
      identifier: 'user0@pay.staging.galoy.io',
      image: '',
      max: 500000,
      metadata: [
        ['text/plain', 'Payment to user0'],
        ['text/identifier', 'user0@pay.staging.galoy.io'],
      ],
      min: 1,
    },
  },
  {
    lnUrlOrAddress: 'user11@pay.staging.galoy.io',
    data: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user11',
      minSendable: 10000,
      maxSendable: 10000,
      metadata:
        '[["text/plain","Payment to user11"],["text/identifier","user11@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    expected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user11',
      commentAllowed: 0,
      description: 'Payment to user11',
      domain: 'pay.staging.galoy.io',
      fixed: true,
      identifier: 'user11@pay.staging.galoy.io',
      image: '',
      max: 10,
      metadata: [
        ['text/plain', 'Payment to user11'],
        ['text/identifier', 'user11@pay.staging.galoy.io'],
      ],
      min: 10,
    },
  },
]
