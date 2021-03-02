export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: '',  // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: `none`, // { moveIn, reserve, both, none },
  // alternateType: `navigateToMoveIn`, // { moveInAlternateType, reservationAlternateType, alternateType, noAlternateType },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Storage Square -Staging',
  facilityName: 'Storage Square',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://storage-square-staging.netlify.app',
  APIKey: `dzJ0OVczSjgqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // storage square 29387
};
