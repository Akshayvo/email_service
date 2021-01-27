export const environment = {
  type: 0,  // { API: 0, iframe: 1 }
  production: true,
  locationName: '', // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'McKeesport Storage - Staging',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  facilityName: 'Sample Self Storage - North',
  websiteUrl: 'https://sample-self-storage-staging.netlify.app',
  APIKey: `dzJ0OFcySjIqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28228
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};
