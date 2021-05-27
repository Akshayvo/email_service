export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  locationName: "michigan/whitehall", // state/city   **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  template: "darkTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover", "test"],
  errorsMails: ["website.dev@codeparva.in"],
  senderEmail: "errors@codeparva.in",
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  appId: "White Lake Storage - staging",
  facilityName: "White Lake Storage",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: "https://whitelakestorage.com",
  APIKey: `dzJ0OVc0SjYqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, //29466 White Lake
};
