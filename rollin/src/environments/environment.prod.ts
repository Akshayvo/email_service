export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: `Rollin' Wheels Self Storage - Staging`,
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `JjFSMCU0IzZHNG86MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 10464
  websiteUrl: 'https://rollin-wheels-mini-storage.netlify.app'
};
