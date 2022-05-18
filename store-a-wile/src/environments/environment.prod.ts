export const environment = {
  production: true,
  locationName: 'woodland',
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Store-A-Wile - Production',
  facilityName: 'Store-A-Wile',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OVczSjgqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29384
  websiteUrl: 'https://www.store-a-wilestorage.com'
};