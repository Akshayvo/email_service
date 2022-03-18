export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'alabama', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  military: false, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Wallenpaupack Self Storage Facility - Production',
  facilityName: 'Wallenpaupack Self Storage Facility',
  emailBaseUrl: '',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://sample-site-multilocation.netlify.app`
};
