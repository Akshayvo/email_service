export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  alternateTenant: `navigateToMoveIn`, // {0, 1, navigateToReserve, navigateToMoveIn},
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'South Wenatchee Self Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dTJXOUQzUDdINE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,  // 29374 south wentchee
  websiteUrl: ''
};
