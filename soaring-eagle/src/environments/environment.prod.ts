export const environment = {
  production: true,
  locationName: 'new-york',
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Soaring Eagle Campground - Staging',
  facilityName: 'Soaring Eagle Campground',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28464
  websiteUrl: 'https://soaring-eagle-staging.netlify.app'
};
