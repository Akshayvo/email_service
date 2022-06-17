export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'new-york/clifton-park',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Boat N Rv Storage',
  facilityName: 'Boat N Rv Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://route9boatnrvstorage.com',
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  APIKey: `dzJ0OVczSjUqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29356

};
