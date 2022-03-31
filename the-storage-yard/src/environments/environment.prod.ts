export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'connecticut/norwich',  // state/city
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  military: true, // set true for Military and Driver's Details
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'The Storage Yard - Staging',
  facilityName: 'The Storage Yard',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://thestorageyardct.com',
  APIKey: `dzJ0N1c4SjAqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 27809 the storage yard
};
