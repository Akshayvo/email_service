export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'inez-storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
};
