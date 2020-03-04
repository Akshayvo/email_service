export const homeScript = {
    '@context': 'http://www.schema.org',
    '@type': 'SelfStorage',
    'name': 'Weir Self Storage',
    'url': 'https://www.weirselfstorage.com',
    'logo': 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Weir_Self_Storage/weir-self-storage-logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '613 Ridge St',
      'addressLocality': 'Sault Ste. Marie',
      'addressRegion': 'MI',
      'postalCode': '49783',
      'addressCountry': 'United States'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '46.500141',
      'longitude': '-84.360499'
    },
    'openingHours': 'Mo, Tu, We, Th, Fr 08:00-18:00 Sa 09:00-15:00',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '(906) 440-7943'
    }
};
