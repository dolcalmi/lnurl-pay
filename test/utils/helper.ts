export const validLnAddresses = [
  'user@domain.com',
  'user.name@domain.com',
  'u@sub.domain.com',
  'user@facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion',
]

export const invalidLnAddresses = [
  ' user@domain.com',
  'user@domain.com ',
  'user @domain.com',
  'user@ domain.com',
  'user@domain. com',
  'user@domain',
  'user@dom@ain.com',
  '@domain',
  'user@',
  '@',
  'word',
]

export const defaultBech32Url =
  'lnurl1dp68gurn8ghj7urp0yh8xarpva5kueewvaskcmme9e5k7tewwajkcmpdddhx7amw9akxuatjd3cz7atnv4erqgfuvv5'

export const validLnUrls = [
  `${defaultBech32Url}`,
  `${defaultBech32Url.toUpperCase()}`,
  `lightning:${defaultBech32Url}`,
  `lightning:${defaultBech32Url.toUpperCase()}`,
  `http://domain.com/?lightning=${defaultBech32Url}`,
  `http://domain.com/?lightning=${defaultBech32Url.toUpperCase()}`,
  `http://www.domain.com/?lightning=${defaultBech32Url}`,
  `http://www.domain.com/?lightning=${defaultBech32Url.toUpperCase()}`,
  `http://domain.com/pagina.html?lightning=${defaultBech32Url}`,
  `http://domain.com/pagina.html?lightning=${defaultBech32Url.toUpperCase()}`,
  `http://www.domain.com/pagina.html?lightning=${defaultBech32Url}`,
  `http://www.domain.com/pagina.html?lightning=${defaultBech32Url.toUpperCase()}`,
]

export const invalidLnUrls = [
  `lnurl`,
  `lightning:abcd`,
  `lightning:lnurl`,
  `http://domain.com/?lightning=abcd`,
  `http://domain.com/?lightning=lnurl`,
  `http://www.domain.com/?lightning=abcd`,
  `http://www.domain.com/?lightning=lnurl`,
  `http://domain.com/pagina.html?lightning=abcd`,
  `http://domain.com/pagina.html?lightning=lnurl`,
  `http://www.domain.com/pagina.html?lightning=abcd`,
  `http://www.domain.com/pagina.html?lightning=lnurl`,
]

export const validInvoices = [
  {
    invoice:
      'lnbcrt10u1pslcly8pp55ytcf99kf6t75vkfnewzgtgxav8dv8fyd0nxw3hfkfp8xtnhckgsdqqcqzpuxqyz5vqsp5zukyzq2lcflnz8es0djh2jyza087nkn8jvx0qdcqrlt4rfrcxlcq9qyyssqmvr8937qug6au92nz97p4z8tdggkhksq6yvclsfy6ts732l9kz28ctt9qhw8gwygfq8a3t73f5689lwff6ul2xfl7m77p7ks4gmzjtgqvnvqyv',
    hash: 'a1178494b64e97ea32c99e5c242d06eb0ed61d246be66746e9b242732e77c591',
    preimage:
      'fbc30fd92d7829ed871f29fdeef71c652e1f697e22800b88e5297bdb57bdace0',
  },
  {
    invoice:
      'lntb13130n1psl9la5pp57pd5fud26tpk5a893yp4snl90mda5sns6uj8589422rw0fndz03qsp5umjxesrm440437ykfjykt2rst8wfdlegg32f0xq5k4val9zvz38sdqqcqzynxqyz5vq9qxpq9qsqrzjqwfn3p9278ttzzpe0e00uhyxhned3j5d9acqak5emwfpflp8z2cnggqd7qqqq3qqqgqqqqlgqqqqqeqqjqtz9qwfn3p9278ttzzpe0e00uhyxhned3j5d9acqak5emwfpflp8z2cngqqqq05qqqqqvsqfqvu7u2ke04028p35n2xr9k23m53ggg6rjx045k2kpvysj0q6zhq74cxnh27xa3vdkqq0dypsfeyqys5mtcn0hz3hrdqvyl3n8tndhlpgpzchyh7',
    hash: 'f05b44f1aad2c36a74e58903584fe57edbda4270d7247a1cb55286e7a66d13e2',
    preimage:
      '4cad8d163234461cb4de6c5ad35e5938f190df261065ef51b9708433466d0c3b',
  },
  {
    invoice:
      'lnbc10m1ps79mp5pp5eat0y56jcfym7eruu049280n9yssw5flmzvnp99up995zq4p2r4qdqqcqzpuxqyz5vqsp5r88jwj2er6nlj40748slw3zy3rwaydtu2x4s84yqmgq0w63fxjdq9qyyssqyc58k4lmayagad3upndzny07w777axtcfv4w9dj4q3tjvj877y99t2r7vgtxc3pw0xtk9j7mftvx72fg5m8rjnphcrkf3mnzzg8l6lcprw8apg',
    hash: 'cf56f25352c249bf647ce3ea551df3292107513fd8993094bc094b4102a150ea',
    preimage:
      'b956cb683997640065bad032aa177e7609c6a6c6289b73c2bf6237cea32fa6c6',
  },
]

export const invalidInvoices = [
  'lnbcrt1pslcav8pp5y8lae09uqd69fv6mccgp7lp42j6nefmzlgfpxzm7289ddvvj43jsdqqcqzpuxqr23ssp50jylhv3wzfnfk2lsgrga0v2px742pnml9tcajfwdulqppeyg5hdq9qyyssq7hmj9wkzen6nnpv9040wxgpcx6dy0zdmkj7k539ll32ecjc6s9r4cj08cj05nszcmc3zkhnu52yhdsmajzmg2ueww7m7z5790vy3cugqn2zsd',
  'lntb349820n1pslcagupp53qzw32u7s70s2uaejhtmpq76fr0lv80c28f7gtv3tw2vgv59n8wsdqqcqzpuxqyz5vqsp560xz2teaz74cltfmvpw6wmcqkrc5a6a0njy8n90w7ptfe42q2h4s9qyyssqdzu9da88zs6qdre3pqxdppls4xj2mnghv3facn2vztjvc2x6p3h9lann5hwx7a972ffna6zhzqrke7mz4cq7xt2d487g2x48pyjvlhsp9cuhy',
  'lnbc1pslca2wpp5zrwrnh2unz02e2qve8ue26dd4l862vumxx0ry0j64tjljucw9jhqdqqcqzpuxqyz5vqsp58mdlrld5wnwhg06skyk4tcwdfyx6t9qk4apc4qka5ah0usduptrq9qyyssqj0rwcgeuz46l3q0jtyazjr9j9lhgq7mgf2xydpdf6cqjenpgaxur43f35c6g9nz634q7r2ze7s5ujqxlvq84wfvxesc78y7khhdy6wspkuesj',
  'abc',
]
