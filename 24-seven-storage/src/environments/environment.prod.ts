export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: '24 Seven Storage - Staging',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `dzJ0MFcwSjgqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 20085 crowns-run
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzJ0OVc3SjlOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==` // 24 seven storage
};
