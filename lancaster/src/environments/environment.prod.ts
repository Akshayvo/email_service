export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'north-dakota/fargo', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'balasubramanian.k@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Lancaster Self Storage',
  facilityName: 'Lancaster Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://aallenselfstorage.com',
  APIKey: `bTJUMW4yTDVbOFs6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, 
  // APIKey: `Mjg0NjQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` //testing
};