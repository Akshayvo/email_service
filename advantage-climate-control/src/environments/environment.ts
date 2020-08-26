
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Advantage Climate Controlled Self Storage - Testing',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzJ0OFc5SjQqME46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,  // 28940 advantage climate controlled self storage
  // APIKey: `dzJ0OFc5SjQqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,  // 28941 advantage climate controlled self storage
};
