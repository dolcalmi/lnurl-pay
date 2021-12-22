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
      pr: 'lntb5m1psu9df3pp59ukuqcahss6uyngxq907j0v2njy56m9qsf9s3t5dknjxt2r5nraqhp545kpgr2glw2ch3tadkf9xmhd72ep7m339ry93np8z9a53fkn82lqcqzpuxqyz5vqsp5rhn6p6cfpmeqxcn8h62lngz8ezvxgh9hqqn2ka4utst4gmg4z79s9qyyssq3f9xgq7amzl6nlh3h9ctfmj2z99zplmwkh0re9ucc0dqrm0rjz0pjz32rgkw8pcqvdjrc4s3rsa57gkhwd8jgde6nyn2ee4exy7rxqcpqt6xz4',
      routes: [],
      successAction: undefined,
    },
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
      pr: 'lntb100n1psu9dd9pp5vkrhqjq60fd49wheygkrx7rw5rafvy6xs5ask5lk6g89udmalzrqhp58qsep20d72qyr7jrjv0e7pruqsjjh6qddtnysdq8lgm3rhmdg9fqcqzpuxqyz5vqsp57f2tcn3qj73st880v2ezmz6e75nv58khttawjkkrtymk623whses9qyyssqkqqk509zydy5p2f9jgr9wgzy7ky5zvqrj8spqdxdqcz6f4p8xej9ku2mq07wvx2kyddsjsgca9vepy3nfln78hmpcaq72entrl0vwggpnuuhht',
      routes: [],
      successAction: undefined,
    },
    serviceParamsExpected: {
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
