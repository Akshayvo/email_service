export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'pennsylvania', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  military: true, // set true for Military and Driver's Details 
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Wallenpaupack Self Storage - Production',
  facilityName: 'Wallenpaupack Self Storage',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://wallenpaupack-self-storage-staging.netlify.app`
};