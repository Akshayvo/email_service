export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  locationName: "pennsylvania/newalexandria ", // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 1, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  template: "lightTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover"],
  errorsMails: ["balasubramanian.k@codeparva.in"],
  senderEmail: "errors@codeparva.in",
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  appId: "William Penn Self Storage",
  facilityName: "William Penn Self Storage",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: "https://william-penn.netlify.app",
  APIKey: `Mjk0NTQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // demo north 28463
};
