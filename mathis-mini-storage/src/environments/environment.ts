
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  locationName: 'mathis/texas', // state/city
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'mathis-mini',
  VERSION: require('../../package.json').version,
  facilityName: 'Mathis Mini Storage',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://mathisministorage.com',
   APIKey: `Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo 
  //APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 18009 mathis 
};
