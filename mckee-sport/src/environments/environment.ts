// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  type: 0,  // { API: 0, iframe: 1 }
  production: false,
  locationName: '', // state/city
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  appId: 'McKeesport Storage - Testing',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  facilityName: 'Sample Self Storage - North',
  websiteUrl: 'https://www.mckeesportstorage.com',
  // APIKey: `dzJ0OFcySjIqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28228
  APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
