export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'deforest/wisconsin',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Deforest - Production',
  facilityName: 'Deforest - Production',
  VERSION:  require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://www.deforestselfstorage.com',
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo 28463
  APIKey: `dTJXN0Q3UDhIMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // deforest 27781
};
