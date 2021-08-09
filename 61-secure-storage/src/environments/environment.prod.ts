export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  template: "darkTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover"],
  errorsMails: ["website.dev@codeparva.in"],
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  senderEmail: "errors@codeparva.in",
  appId: "Store QC",
  facilityName: "Store QC",
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dTJXMEQxUDJINU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 61 secure storage
  websiteUrl: "",
};
