export const environment = {
  production: true,
  type: 1,  // { API: 0, iframe: 1 }
  // errorsMails: ['website.dev@codeparva.in'],
  errorsMails: ['sanghmitra.v@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Secure Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: ``, // 29322
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  websiteUrl: ''
};
