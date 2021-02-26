export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'windsor/wisconsin',  // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Fifty One Self Storage - Staging',
  facilityName: 'Fifty One Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://fiftyoneselfstorage.com',
  APIKey: `dTJXOUQ0UDBIN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29407 fifty one
};
