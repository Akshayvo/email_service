export const environment = {
  type: 0,  // { API: 0, iframe: 1 }
  production: false,
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Selkirk - Production',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OFc1SjkqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28599 Selkirk
};
