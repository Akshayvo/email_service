export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'or/lebanon',  // state/city
  facilityName: 'Starlite Storage',
  alternateType: { moveIn: false, reserve: true }, // { moveIn: true, reserve: true },
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Starlite Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OVczSjMqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29338 Starlite Storage
  websiteUrl: ''
};
