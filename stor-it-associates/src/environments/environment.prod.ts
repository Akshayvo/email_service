export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Stor-it Associates - Staging',
  VERSION: require('../../package.json').version,
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://storeitwexford.com',
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  APIKey: `dzF0MVc0SjgqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 11483
};
