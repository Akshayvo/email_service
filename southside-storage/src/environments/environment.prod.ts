export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Southside Storage - Staging',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `XjJ7N0Y5VzVHMkk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 27952
  APIKey: `dzJ0OVczSjgqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // soutside storage 29385
  websiteUrl: ''
};
