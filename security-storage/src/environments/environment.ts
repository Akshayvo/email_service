// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,
  signUpForAuotoPay: 0,
  locationName: 'new-york',
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  military: true, // set true for Military and Driver's Details 
  senderEmail: 'errors@codeparva.in',
  appId: 'security-storage',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  facilityName: 'Security Storage cuero',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  websiteUrl: '',
  APIKey: `dzJ0OVc0SjYqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29462
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
