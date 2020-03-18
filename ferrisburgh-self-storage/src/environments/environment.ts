
export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Ferrisburgh Self Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `dzJ0OVcySjMqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29237
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
  APIKey: `dzJ0OVcySjYqME46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` //29260
};
