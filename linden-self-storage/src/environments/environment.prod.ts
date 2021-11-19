export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'new-york/rochester', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Linden Self Storage',
  facilityName: 'Linden Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://linden-storage-staging.netlify.app',
  APIKey: `dzF0NFcySjYqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,//14268

};
