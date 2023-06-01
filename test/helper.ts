export const validPayServiceParams = [
  {
    lnUrlOrAddress:
      'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7ar9wd6xjmn8h9qlv7',
    tokens: 5000,
    serviceParams: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      minSendable: 1000,
      maxSendable: 500000000,
      metadata:
        '[["text/plain","Payment to testing"],["text/identifier","testing@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    serviceInvoice: {
      pr: 'lntbs50u1p363g52pp5axkm79jg9llq9suwf8w2gygvaa6z0jtdhl89kjl8vtphnpejk9xqhp5s02v4jhp0nxhkx9qqqraj24ga4cjnfpf3tgr9f2ymq2kx4ap8umscqzpuxqyz5vqsp5vasapyafj0w3lvethpyvqj6224clulvp8dwusxkw79hmdxtnn0dq9qyyssqgz0eqsag9jh7mcy4tvcz9p77ngh946a0a5kakxfjyagdhxv26d8qrum2wtk7709r2n6qlcqnu409a9wjt2tyqdnf2aqx7rhv905lksqptz820d',
      routes: [],
      successAction: undefined,
    },
    preimage:
      '507498a304d040752566f69583a2d6a28c6d8fd3469c13786f2e44b18532d7da',
    serviceParamsExpected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      commentAllowed: 0,
      description: 'Payment to testing',
      domain: 'pay.staging.galoy.io',
      fixed: false,
      identifier: 'testing@pay.staging.galoy.io',
      image: '',
      max: 500000,
      metadata: [
        ['text/plain', 'Payment to testing'],
        ['text/identifier', 'testing@pay.staging.galoy.io'],
      ],
      metadataHash:
        '83d4cacae17ccd7b18a00007d92aa8ed7129a4298ad032a544d8156357a13f37',
      min: 1,
    },
  },
  {
    lnUrlOrAddress: 'testing@pay.staging.galoy.io',
    tokens: 10,
    serviceParams: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      minSendable: 10000,
      maxSendable: 10000,
      metadata:
        '[["text/plain","Payment to testing"],["text/identifier","testing@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    serviceInvoice: {
      pr: 'lntbs100n1p36njvkpp53dl62nzwkp3d7sxj5pgf5dppgkddgkprdfk823s3st4cy7vsujsshp5s02v4jhp0nxhkx9qqqraj24ga4cjnfpf3tgr9f2ymq2kx4ap8umscqzpuxqyz5vqsp5edcvjjav3k94ndjdgfrs5cr5ygne09dqryuw483xlpd7smxzp5wq9qyyssqky8c279vrlpy87wrj7vt698yltjq7jmcj0hulp09c3engvplkkykr0qm5jg83vqjf7pxw7nq0lce895eq2jyjdr7j2tlap2sh97vznsp5qydfk',
      routes: [],
      successAction: undefined,
    },
    preimage:
      'b7a2a9d3e54566d3b8ef2ac14d828fc336bef5bf3ca60d3e8c2b207283fcfb36',
    serviceParamsExpected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      commentAllowed: 0,
      description: 'Payment to testing',
      domain: 'pay.staging.galoy.io',
      fixed: true,
      identifier: 'testing@pay.staging.galoy.io',
      image: '',
      min: 10,
      max: 10,
      metadata: [
        ['text/plain', 'Payment to testing'],
        ['text/identifier', 'testing@pay.staging.galoy.io'],
      ],
      metadataHash:
        '83d4cacae17ccd7b18a00007d92aa8ed7129a4298ad032a544d8156357a13f37',
    },
  },
  {
    lnUrlOrAddress:
      'lnurlp://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
    tokens: 10,
    serviceParams: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      minSendable: 10000,
      maxSendable: 10000,
      metadata:
        '[["text/plain","Payment to testing"],["text/identifier","testing@pay.staging.galoy.io"]]',
      tag: 'payRequest',
    },
    serviceInvoice: {
      pr: 'lntbs100n1p36njvkpp53dl62nzwkp3d7sxj5pgf5dppgkddgkprdfk823s3st4cy7vsujsshp5s02v4jhp0nxhkx9qqqraj24ga4cjnfpf3tgr9f2ymq2kx4ap8umscqzpuxqyz5vqsp5edcvjjav3k94ndjdgfrs5cr5ygne09dqryuw483xlpd7smxzp5wq9qyyssqky8c279vrlpy87wrj7vt698yltjq7jmcj0hulp09c3engvplkkykr0qm5jg83vqjf7pxw7nq0lce895eq2jyjdr7j2tlap2sh97vznsp5qydfk',
      routes: [],
      successAction: undefined,
    },
    preimage:
      'b7a2a9d3e54566d3b8ef2ac14d828fc336bef5bf3ca60d3e8c2b207283fcfb36',
    serviceParamsExpected: {
      callback: 'https://pay.staging.galoy.io:443/.well-known/lnurlp/testing',
      commentAllowed: 0,
      description: 'Payment to testing',
      domain: 'pay.staging.galoy.io',
      fixed: true,
      identifier: 'testing@pay.staging.galoy.io',
      image: '',
      min: 10,
      max: 10,
      metadata: [
        ['text/plain', 'Payment to testing'],
        ['text/identifier', 'testing@pay.staging.galoy.io'],
      ],
      metadataHash:
        '83d4cacae17ccd7b18a00007d92aa8ed7129a4298ad032a544d8156357a13f37',
    },
  },
]
