export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Sentry Stor-ALL',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzJ0N1c1SjcqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 27573 Sentry stor-all

};
