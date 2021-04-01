export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'wisconsin/whitewater',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Whitewater Self-Storage',
  facilityName: 'Whitewater Self-Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://whitewater-staging.netlify.app',
  APIKey: `bTJUOW40TDJbM1s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
};
