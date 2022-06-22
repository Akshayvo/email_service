export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'washington/kelso',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: "Gordon's Mini Storage",
  facilityName: "Gordon's Mini Storage - Production",
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://gordonsministorage.com',
  APIKey: `dzJ0N1czSjUqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  // APIKey: `dzJ0OVc0SjYqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29462 

};
