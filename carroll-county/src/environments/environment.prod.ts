export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'location', 
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Carroll county Storage - Staging',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  VERSION: require('../../package.json').version,
  facilityName: 'Carroll County Storage',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://www.carrollcountystorage.com`
};
