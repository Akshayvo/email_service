export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  template: 0, // { darkTheme: 0, lightTheme: 1, withoutJumbotron: 2}
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Catskill',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  websiteUrl: 'https://catskillselfstorage.com'
};
