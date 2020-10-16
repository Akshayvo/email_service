export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Shelton Storage Solutions - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `XjJ7OUYzVzZHMUk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29361
  websiteUrl: 'https://shelton.netlify.app'
};
