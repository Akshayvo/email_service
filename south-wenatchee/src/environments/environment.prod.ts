export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Storage- Town - Production',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://south-wenatchee-multi.netlify.app`
};
