export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  appId: 'Fortress',
  VERSION: require('../../package.json').version,
  websiteUrl: 'https://fortressministorage.com',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzF0MFcxSjcqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` //  Fortess 10176
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};
