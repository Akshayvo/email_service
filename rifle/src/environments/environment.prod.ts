
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  websiteUrl: 'https://riflestorageunits.com/',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Lois Stor-All',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzF0OVcwSjVOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // 1905 Lois-stor-all
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};
