export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Storag eWorld - Production',
  facilityName: 'Storage World - Production',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://www.storageworldmn.com',
  APIKey: 'ZjJWMHc5UDM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O' // 2093
};
