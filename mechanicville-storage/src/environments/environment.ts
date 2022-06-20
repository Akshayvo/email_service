// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'new-york/mechanicville', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  military: false, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: 'errors@codeparva.in',
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  appId: 'Self Storage of Mechanicville',
  facilityName: 'Self Storage of Mechanicsville',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://selfstorageofmechanicville.com',
  APIKey: `dzJ0OVc2SjAqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29607  
  // APIKey: `Mjg0NjQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28464 
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
