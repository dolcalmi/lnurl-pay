export const validPayServiceParams = [
  {
    lnUrlOrAddress:
      'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5',
    tokens: 5000,
    serviceParams: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user0',
      minSendable: 1000,
      maxSendable: 500000000,
      metadata:
        '[["text/plain","Payment to user0"],["text/identifier","user0@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    serviceInvoice: {
      pr: 'lntb13130n1psl9la5pp57pd5fud26tpk5a893yp4snl90mda5sns6uj8589422rw0fndz03qsp5umjxesrm440437ykfjykt2rst8wfdlegg32f0xq5k4val9zvz38sdqqcqzynxqyz5vq9qxpq9qsqrzjqwfn3p9278ttzzpe0e00uhyxhned3j5d9acqak5emwfpflp8z2cnggqd7qqqq3qqqgqqqqlgqqqqqeqqjqtz9qwfn3p9278ttzzpe0e00uhyxhned3j5d9acqak5emwfpflp8z2cngqqqq05qqqqqvsqfqvu7u2ke04028p35n2xr9k23m53ggg6rjx045k2kpvysj0q6zhq74cxnh27xa3vdkqq0dypsfeyqys5mtcn0hz3hrdqvyl3n8tndhlpgpzchyh7',
      routes: [],
      successAction: undefined,
    },
    preimage:
      '4cad8d163234461cb4de6c5ad35e5938f190df261065ef51b9708433466d0c3b',
    serviceParamsExpected: {
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
      metadataHash:
        'ad2c140d48fb958bc57d6d92536eedf2b21f6e3128c858cc27117b48a6d33abe',
      min: 1,
    },
  },
  {
    lnUrlOrAddress: 'user11@pay.staging.galoy.io',
    tokens: 10,
    serviceParams: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user11',
      minSendable: 10000,
      maxSendable: 10000,
      metadata:
        '[["text/plain","Payment to user11"],["text/identifier","user11@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    serviceInvoice: {
      pr: 'lnbc10m1ps79mp5pp5eat0y56jcfym7eruu049280n9yssw5flmzvnp99up995zq4p2r4qdqqcqzpuxqyz5vqsp5r88jwj2er6nlj40748slw3zy3rwaydtu2x4s84yqmgq0w63fxjdq9qyyssqyc58k4lmayagad3upndzny07w777axtcfv4w9dj4q3tjvj877y99t2r7vgtxc3pw0xtk9j7mftvx72fg5m8rjnphcrkf3mnzzg8l6lcprw8apg',
      routes: [],
      successAction: undefined,
    },
    preimage:
      'b956cb683997640065bad032aa177e7609c6a6c6289b73c2bf6237cea32fa6c6',
    serviceParamsExpected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/user11',
      commentAllowed: 0,
      description: 'Payment to user11',
      domain: 'pay.staging.galoy.io',
      fixed: true,
      identifier: 'user11@pay.staging.galoy.io',
      image: '',
      min: 10,
      max: 10,
      metadata: [
        ['text/plain', 'Payment to user11'],
        ['text/identifier', 'user11@pay.staging.galoy.io'],
      ],
      metadataHash:
        '382190a9edf28041fa43931f9f047c04252be80d6ae6483407fa3711df6d4152',
    },
  },
]
