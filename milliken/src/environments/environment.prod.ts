export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Milliken Self Storage - Staging',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `PDFyNHQxSDVZMEE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 14150
  websiteUrl: 'https://milliken-staging.netlify.app'
};
