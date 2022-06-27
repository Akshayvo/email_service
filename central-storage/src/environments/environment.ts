// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  errorsMails: [ 'website.dev@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'central-storage - Production',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzJ0OVc0SjYqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo 
  // APIKey: `dzF0OVcwSjVOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==` // 1905 Lois
  // APIKey: `dzJ0Nlc1SjcqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,  // 26572 central  storage
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
