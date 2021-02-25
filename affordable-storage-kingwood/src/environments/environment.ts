// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'texas/baldwinsville',
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  reservetionFormType: 0, // { withoutAlternateDetail:0, withAlternateDetial: 1}
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Affordable Storage of Kingwood - Testing',
  facilityName: 'Affordable Storage of Kingwood',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://affordablestorageofkingwood.com/',
  // APIKey: `dzJ0OFc0SjYqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28464
  APIKey: `dzJ0OFc0SjYqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // demo north 28465
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`  // demo north 28463
  // APIKey: `dzJ0OVczSjYqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // kingwood 29363 old CID
  // APIKey: `dzJ0OVczSjcqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`  // new kingwood CID 29375
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
