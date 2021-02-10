export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'pa/nescopeck', // state/city
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  facilityName: 'Herron Hill Storage',
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Herron Hill Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dTJXOUQzUDRIMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // Herron hill
  websiteUrl: 'https://herronhillstorage.com',
};
