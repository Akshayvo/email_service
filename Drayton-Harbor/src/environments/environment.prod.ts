export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Drayton-Harbor - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `dzJ0MFcwSjgqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 20085 crowns-run
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzJ0OVcwSjgqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 29083 drayton
};
