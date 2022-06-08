export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: `Garner's U Store - Production`,
  VERSION: require('../../package.json').version,
  facilityName: 'Self Storage Facility - Location 1',
  websiteUrl: `Garner's U Store`,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
};
