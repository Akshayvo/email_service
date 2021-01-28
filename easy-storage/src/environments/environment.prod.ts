export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  // locationName: 'new-york/baldwinsville',  // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: `navigateToMoveIn`, // { moveInAlternateType, reservationAlternateType, alternateType, noAlternateType },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Easy Storage - production',
  facilityName: 'Easy Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://easystoragellc.com',
  APIKey: `bTV+N24zeTY6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // Easy Storage 5736
};
