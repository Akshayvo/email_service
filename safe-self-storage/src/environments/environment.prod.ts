export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'new-york/baldwinsville',  // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'SAFE Self Storage - Production',
  facilityName: 'SAFE Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://sample-self-storage-staging.netlify.app',
  APIKey: `dzJ0OVc0SjMqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29435 Safe self Storage
};
