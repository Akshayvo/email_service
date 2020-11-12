export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Catskill',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OVczSjUqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29356 Route-9-Boat
  websiteUrl: 'https://catskillselfstorage.com'
};
