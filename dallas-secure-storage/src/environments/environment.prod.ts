
export const environment = {
  production: true,
  locationName: 'oregon', // state/city  **Remeber to update locationName in sitemap.xml as well
  errorsMails: ['website.dev@codeparva.in'],
  senderEmail: 'errors@codeparva.in',
  appId: 'Dallas Secure Storage',
  VERSION: require('../../package.json').version,
  emailBaseUrl: 'https://emailsvc-ext.syrasoft.com/v1/email',
  baseUrl: `https://simapi.syrasoft.com/1/api/`,
  websiteUrl: `https://www.dallassecurestorage.com`,
  facilityName: 'Dallas Secure Storage',
   // APIKey: `dzJ0MFc4SjcqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 20871
  // APIKey: `dzJ0N1czSjQqMU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O`, // 27341
};
