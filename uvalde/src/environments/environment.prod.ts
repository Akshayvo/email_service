export const environment = {
  production: true,
  type: 0,  // { API: 0, iframe: 1 }
  locationName: 'texas', // state/city  **Remeber to update locationName in sitemap.xml as well
  signUpForAuotoPay: 0, // { Yes: 1, No: 0 }
  alternateType: { moveIn: true, reserve: true }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Uvalde Affordable Storage - Production',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  facilityName: 'Uvalde Affordable Storage - Testing',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://www.uvaldeaffordablestorage.com`
  // APIKey: `dzJ0OVcySjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 29234
  // APIKey: `dzJ0OVcySjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29234

  // APIKey: `PTJeOCM0VDZ4M2s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28463

  // APIKey: `UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28464
  // APIKey: `YzI+OEs0ejZqNUg6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28465
  // APIKey: `aDJLOGk0KzZBNng6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28466
};
