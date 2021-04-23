export const environment = {
  production: true,
  locationName: 'joshua-tree',
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Joshua Tree Mini Storage - Staging',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `bTl+Nm45eTA6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 9690
  websiteUrl: 'https://joshuatreeministorage.com'
};
