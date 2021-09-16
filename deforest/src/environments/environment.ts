// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  type: 0, // { API: 0, iframe: 1 }
  locationName: "deforest/wisconsin", // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  template: "darkTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover", "test"],
  errorsMails: ["sanghmitra.v@codeparva.in"],
  senderEmail: "errors@codeparva.in",
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  appId: "Deforest - Production",
  facilityName: "Deforest - Production",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: "https://www.deforestselfstorage.com",
  APIKey: `Mjg0NjQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // north demo 28464
  // APIKey: `dTJXN0Q3UDhIMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // deforest 27781
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
