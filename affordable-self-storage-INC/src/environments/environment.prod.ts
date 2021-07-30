export const environment = {
  production: true,
  type: 0, // { API: 0, iframe: 1 }
  template: "darkTheme", // { darkTheme, lightTheme, withoutJumbotron}
  cards: ["Visa", "Master Card", "Amex", "Discover"],
  errorsMails: ["website.dev@codeparva.in"],
  emailBaseUrl: "https://emailsvc-ext.syrasoft.com/v1/email",
  senderEmail: "errors@codeparva.in",
  appId: "Affordable Self Storage INC - Production",
  VERSION: require("../../package.json").version,
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  APIKey: `dzF0NVcxSjJOOjIyfCU4Nzg3NyQoOD1iVzBzaGRkOWtlb2NeTg==`, // Affordable self storage INC 1512
  websiteUrl: "https://affordableselfstoragenj.com",
};
