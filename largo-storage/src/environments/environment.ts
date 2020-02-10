// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'largo-storage',
  VERSION:  require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OVcySjIqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,
  // 29229:dzJ0OVcySjIqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O
  // 29235:dzJ0OVcySjMqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
