export const script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'name': 'Rifle Self Storage',
    // tslint:disable-next-line:max-line-length
    'image': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Rifle_Storage/rifle-self-storage-closed-unit.jpg',
    '@id': '',
    'url': 'https://www.riflestorageunits.com',
    'telephone': '(970) 665-9735',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1889 Airport Road',
      'addressLocality': 'Rifle',
      'addressRegion': 'CO',
      'postalCode': '81650',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 39.522915,
      'longitude': 39.522915
    },
    'openingHoursSpecification': [{
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '10:00',
      'closes': '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': 'Saturday',
      'opens': '10:00',
      'closes': '12:00'
    }],
    'sameAs': 'https://www.facebook.com/Rifleselfstorage'
  };
