export const environment = {
  production: false,
  type: 1,  // { API: 0, iframe: 1 }
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  websiteUrl: 'https://thestorehousewatertown.com',
  appId: 'store-house',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzF0NlczSjcqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // store-house 16374
};
