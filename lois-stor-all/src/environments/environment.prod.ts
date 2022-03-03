export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'wisconsin/burlington', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Lois Stor-All - Production',
  facilityName: 'Lois Stor-All - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://www.loisstorall.com',
  APIKey: `dzF0OVcwSjVOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // 1905 Lois-stor-all
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};
