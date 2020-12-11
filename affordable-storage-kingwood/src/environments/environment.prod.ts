export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  alternateTenant: `navigateToMoveIn`, // {0, 1, navigateToReserve, navigateToMoveIn},
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  reservetionFormType: 0, // { withoutAlternateDetail:0, withAlternateDetial: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Affordable Storage of Kingwood - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `dzJ0OVczSjYqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // Kingwood 29363 OLD CID
  APIKey: `dzJ0OVczSjcqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,  // new kingwood CID 29375 
  websiteUrl: ''
};
