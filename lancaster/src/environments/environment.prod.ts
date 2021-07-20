export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'lancaster/south-carolina', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  military: true, // set true for Military and Driver's Details
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'balasubramanian.k@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Lancaster Self Storage',
  facilityName: 'Lancaster Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'lancaster-self-storage-staging.netlify.app',
  APIKey: `bTJUOW40TDhbNls6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, 
  // APIKey: `Mjg0NjQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` //testing
};