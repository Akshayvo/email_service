export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  alternateTenant: `navigateToMoveIn`, // {0, 1, navigateToReserve, navigateToMoveIn},
  errorsMails: ['website.dev@codeparva.in'],
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  senderEmail: 'errors@codeparva.in',
  appId: 'Catskill Self Storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  websiteUrl: 'https://catskillselfstorage.com'
};
