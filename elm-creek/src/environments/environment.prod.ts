export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  locationName: "oklahoma/owasso", // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: false, // set true for Military and Driver's Details
  template: "withoutJumbotron", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover", "test"],
  errorsMails: ["website.dev@codeparva.in"],
  senderEmail: "errors@codeparva.in",
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  appId: "Elm Creek Storage",
  facilityName: "Elm Creek Storage",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: "https://elmcreekstorage.com",
  // APIKey: `Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north
  APIKey: `dzF0OVc2SjkqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, //
};
