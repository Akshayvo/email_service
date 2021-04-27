export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'new-york/baldwinsville',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Herkimer Storage Outlet - Staging',
  facilityName: 'Herkimer Storage Outlet',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://herkimer-storage-staging.netlify.app',
  APIKey: `dzJ0OVc0SjYqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29461 demo data 3 
};
