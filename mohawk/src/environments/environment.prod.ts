export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  alternateTenant: `navigateToMoveIn`, // {0, 1, navigateToReserve, navigateToMoveIn},
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  reservetionFormType: 0, // { withoutAlternateDetail:0, withAlternateDetial: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Mohawk Self Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'http://mohawkselfstorage.com',
  APIKey: `XjF7M0Y3VzZHOEk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // Mohawk 13768
};
