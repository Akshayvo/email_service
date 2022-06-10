// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'pennsylvania/morgantown', // state/city
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  paymentPageType: 1, // { withoutTab: 0, withTab: 1}
  facilityName: 'Red School Self Storage',
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Red School Self Storage - Testing',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://www.redschoolstorage.com',
  // baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // AnotherLocationAPIKey: `MTEyOTE6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`,
  // DemoNorthAPIKey: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28463
  // APIKey: `dTFXNUQ0UDNIN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // red school
  // APIKey: `dzJ0OFc0SjYqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28464 (For 0 reservetion charges)
  // baseUrl: `http://localhost:60444/api/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
