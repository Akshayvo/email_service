
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Self Storage of Wisconsin Dells-Munroe Ave - Testing',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  // APIKey: `dzJ0OFc5SjgqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 28986 self storage of wis dells
  // APIKey: `dzJ0OVcySjkqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 29295  self storage wis dells munroe ave
};
