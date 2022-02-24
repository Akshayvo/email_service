
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Access Self Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://www.accessselfstorageinc.net',
  facilityName: 'Access Self Storage',
  locationName: 'texas/new-braunfels', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  APIKey: `Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28463 north demo 
  // APIKey: `dzJ0MFcxSjQqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 20149 access self storage  

};
