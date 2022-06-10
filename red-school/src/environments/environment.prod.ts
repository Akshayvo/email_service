export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'pennsylvania/morgantown', // state/city
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  facilityName: 'Red School Self Storage',
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Red School Self Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dTFXNUQ0UDNIN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // Red School
  websiteUrl: 'https://www.redschoolstorage.com'
};
