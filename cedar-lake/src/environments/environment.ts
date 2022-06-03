// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'indiana/cedar-lake', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: 'darkTheme', // { darkTheme, lightTheme, withoutJumbotron}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover', 'test'],
  errorsMails: [ 'sanghmitra.v@codeparva.in' ],
  senderEmail: '',
  emailBaseUrl: '',
  appId: 'Cedar Lake Storage',
  facilityName: 'Cedar Lake Storage',
  VERSION: require('../../package.json').version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: 'https://cedarlakestorage219.com',
  // APIKey: `dzJ0OVc1SjUqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29553
  APIKey: `Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28463
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
