// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  locationName: 'oregon', // state/city  **Remeber to update locationName in sitemap.xml as well
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Dallas Secure Storage',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://www.dallassecurestorage.com`,
 
  facilityName: 'Herlirhy Storage',
  // APIKey: `dzJ0MFc4SjcqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 20871
  // APIKey: `dzJ0N1czSjQqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 27341
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
