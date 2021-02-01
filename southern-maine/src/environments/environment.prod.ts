export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'me/portland', // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Southern Maine Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  facilityName: 'Southern Maine Storage',
  APIKey: `dzZ0MVc4SjhOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // 6188 southern Maine
  websiteUrl: ''
};
