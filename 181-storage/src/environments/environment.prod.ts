export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: '181 Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0MFcwSjMqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 20035
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  websiteUrl: ''
};
