export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Movin On Storage Center - staging',
  VERSION:  require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  // APIKey: `dTJXN0Q3UDhIMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // deforest
  // APIKey: `dTJXOEQ5UDJINE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 28924 sun prairie
  APIKey: `dTFXMkQxUDRIOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // movein on storage
};
