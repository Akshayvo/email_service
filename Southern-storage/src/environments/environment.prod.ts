export const environment = {
  production: true,
  locationName: 'Mississippi',
  type: 0,  // { API: 0, iframe: 1 }
  paymentPageType: 0, // { withoutTab: 0, withTab: 1}
  cards: ['Visa', 'Master Card', 'Amex', 'Discover'],
  alternateType: { moveIn: true, reserve: false }, // { moveIn: true, reserve: true },
  military: true, // set true for Military and Driver's Details 
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'SouthernStorage',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  // APIKey: `dzJ0OVcySjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O` // 29234
  // APIKey: `dzJ0OVcySjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 29234

  // APIKey: `PTJeOCM0VDZ4M2s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28463

  // APIKey: `UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28464
  // APIKey: `YzI+OEs0ejZqNUg6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28465
  // APIKey: `aDJLOGk0KzZBNng6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 28466
};
