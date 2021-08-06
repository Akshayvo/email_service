export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  locationName: "florida/fort-lauderdale", // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: false, reserve: false }, // { moveIn: true, reserve: true },
  military: false, // set true for Military and Driver's Details
  template: "lightTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover", "test"],
  errorsMails: ["website.dev@codeparva.in"],
  senderEmail: "errors@codeparva.in",
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  appId: "Broward County Self Storage",
  facilityName: "Broward County Self Storage",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: "https://browardcountyselfstorage.com",
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  APIKey: `dzJ0OVc0SjgqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29462
};
