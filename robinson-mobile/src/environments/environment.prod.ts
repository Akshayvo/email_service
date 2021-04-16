export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'canada/kol', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: [ 'balasubramanian.k@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Robinson Mobile Storage',
  facilityName: 'Robinson Mobile Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://robinson-mobile.netlify.app',
  APIKey: `bTJUOG40TDZbNVs6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo 28465
};