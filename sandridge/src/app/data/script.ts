export const homeScript = {
    '@context': 'https://schema.org',
      '@type': 'SelfStorage',
      'image': [
        'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sandridge_Rv_and_Boat_Storage/jpg/sandridge-rv-and-boat-storage-open-storage+(1x1).jpg',
        'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sandridge_Rv_and_Boat_Storage/jpg/sandridge-rv-and-boat-storage-open-storage+(4x3).jpg',
        'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sandridge_Rv_and_Boat_Storage/jpg/sandridge-rv-and-boat-storage-open-storage+(16x9).jpg'
       ],
      '@id': 'https://sandridgervboatstorage.com/',
      'name': 'Sandridge RV & Boat Storage',
       'description': 'Are you in need of boat or recreational vehicle storage at an affordable rate? Sandridge Boat & RV Storage has been serving the Long Beach community with vehicle storage since 1996.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '7003 Sandridge Rd',
        'addressLocality': 'Long Beach',
        'addressRegion': 'WA',
        'postalCode': '98631',
        'addressCountry': 'United state'
      },
     'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.6',
    'reviewCount': '12'
  },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 46.353359,
        'longitude': -124.031542
      },
      'url': 'https://sandridgervboatstorage.com/',
      'telephone': '(360) 642-2281',

      'priceRange': '',
     'openingHours': ['Mo-Sun 06:30-21:30'],
      'currenciesAccepted': 'USD',
    'paymentAccepted':'Cash, Credit card, Online Payment',
       'areaServed': {
    '@type': 'State',
    'name': 'Washington'
     },

      'acceptsReservations': 'True'
};

export const contactScript = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': 'Sandridge RV & Boat Storage',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Long Beach',
      'postalCode': '98631',
      'streetAddress': '7003 Sandridge Rd'
    },
     'url': 'https://sandridgervboatstorage.com/',
     'image': [
          'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sandridge_Rv_and_Boat_Storage/jpg/sandridge-rv-and-boat-storage-open-storage+(1x1).jpg'
         ],
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '(360) 642-2281',
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone': '(360) 642-2281',
      'contactType': 'customer service'
    }],
    'email': 'manager@sandridgervboatstorage.com',
    'sameAs': [
      '',
      '',
      ''
    ]
  };
