export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Self Storage of Wisconsin Dells-Munroe Ave - Staging',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  // APIKey: `dzJ0OFc5SjgqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28986 Self Storage of Wisconsin Dells
  APIKey: `dzJ0OVcySjkqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29295  self storage wis dells munroe ave
  websiteUrl: ''
};
