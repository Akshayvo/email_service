export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  s3_base_url: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Storage_King_Images',
  s3_powered_by_url: 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Syrasoft_Poweredby',
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Storage King',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OFcxSjEqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28113
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};
