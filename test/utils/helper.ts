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
