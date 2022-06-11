// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'location', 
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['sanghmitra.v@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Carroll county Storage - Staging',
  VERSION: require('../../package.json').version,
  facilityName: 'Carroll County Storage',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://carrollcountystorage.com`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
