export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'florida/naples',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Goodlette Self Storage',
  facilityName: 'Goodlette Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://goodlette-staging.netlify.app',
  APIKey: `dzF0MlcySjlOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // demo north
};
