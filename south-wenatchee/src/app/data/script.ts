export const script = {
    // Put your script here
    'content': 'noindex, follow',
    'name': 'robots'

};

export const homePageScript = [ {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': 'South Wenatchee Self Storage',
    'url': 'https://www.bestwenatcheestorage.com/',
    'priceRange': '$44 - $199',
      'address' : {
      '@type' : 'PostalAddress',
      'addressRegion' : 'Wenatchee'
    },
     'telephone' : '(509) 662-2600',
     'image': [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-43.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-169.jpg'
     ],
    'logo': ''
  }, {

    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : 'South Wenatchee Self Storage',
    'image': [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-43.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-169.jpg'
     ],
    'telephone' : '(509) 662-2600',
    'email' : 'selfstorageinc@hotmail.com',
    'address' : {
      '@type' : 'PostalAddress',
      'streetAddress' : '1536 S Wenatchee Ave',
      'addressLocality' : 'Wenatchee',
      'addressRegion' : 'WA',
      'postalCode' : '98801'
    },
    'openingHours': 'Mo,Tu,We,Th,Fri 12:00-17:00',
    'amenityFeature': [
    {'@type': 'LocationFeatureSpecification',
    'name': 'Easy Online Payments'},
    {'@type': 'LocationFeatureSpecification',
    'name': 'Great Customer Service'},
    {'@type': 'LocationFeatureSpecification',
    'name': 'Security Cameras on Premises'}],
    'priceRange': '$44-$199',
    'url' : 'https://www.bestwenatcheestorage.com/wa/south-wenatchee/storage-units'
  }, {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : `Leo's Self Storage`,
    'image': [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-43.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-169.jpg'
     ],
    'telephone' : '(509) 662-2600',
    'email' : 'selfstorageinc@hotmail.com',
    'address' : {
      '@type' : 'PostalAddress',
      'streetAddress' : '1313 N Wenatchee Ave, , WA, 98801',
      'addressLocality' : 'Wenatchee',
      'addressRegion' : 'WA',
      'postalCode' : '98801'
    }, 'priceRange': '$44-$199',
    'openingHours': 'Mo,Tu,We,Th,Fri 09:00-17:00',
    'amenityFeature': [{'@type': 'LocationFeatureSpecification',
    'name': 'Easy Online Payments'},
    {'@type': 'LocationFeatureSpecification',
    'name': 'Great Customer Service'},
    {'@type': 'LocationFeatureSpecification',
    'name': 'Security Cameras on Premises'}],
    'url' : 'https://www.bestwenatcheestorage.com/wa/leos-self-storage/storage-units'
  },  ];


export const Location1Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-43.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-169.jpg'
     ],
    '@id': 'https://www.bestwenatcheestorage.com/wa/south-wenatchee/storage-units',
    'name': 'South Wenatchee Self Storage',
     'description': 'We are a locally owned & operated self storage facility serving the Wenatchee, community! Take a moment to review our pricing and availability, then give us a call today!',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1536 S Wenatchee Ave',
      'addressLocality': 'Wenatchee',
      'addressRegion': 'WA',
      'postalCode': '98801',
      'addressCountry': 'United state'
    },
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '3.9',
  'bestRating': '5',
  'reviewCount': '18'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 47.401888,
      'longitude':  -120.300534
    },
    'url': 'https://www.bestwenatcheestorage.com/wa/south-wenatchee/about',
    'telephone': '(509) 662-2600',

    'priceRange': '$44 - $199',
   'openingHours': ['Mo-Sat 09:00-17:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Check, Cash, Credit Card, Debit Card, Online Credit, Online Debit',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },

    'acceptsReservations': 'True'

};

export const Location2Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/leos-self-storage-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/leos-self-storage-43.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/leos-self-storage-169.jpg'
     ],
    '@id': 'https://www.bestwenatcheestorage.com/wa/leos-self-storage/storage-units',
    'name': `Leo's Self Storage`,
     'description': 'We are a locally owned & operated self storage facility serving the Wenatchee, community! We offer affordable self storage units in a variety of sizes, and our service always comes with a smile. ',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '1313 N Wenatchee Ave',
      'addressLocality': 'Wenatchee',
      'addressRegion': 'WA',
      'postalCode': '98801',
      'addressCountry': 'United state'
    },
//    'aggregateRating': {
//   '@type': 'AggregateRating',
//   'ratingValue': '',
//   'bestRating': '5',
//   'reviewCount': ''
// },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 47.4409925,
      'longitude': -120.3269893
    },
    'url': 'https://www.bestwenatcheestorage.com/wa/leos-self-storage/about',
    'telephone': '(509) 662-2600',

    'priceRange': '$44 - $199',
   'openingHours': ['Mo-Sat 09:00-17:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Credit, Check, Online Credit,  Online Debit',
     'areaServed': {
  '@type': 'State',
  'name': 'Wenatchee'
   },

    'acceptsReservations': 'True'

};


export const contactPageLocation1Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': 'South Wenatchee Self Storage',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Wenatchee',
      'postalCode': '98801',
      'streetAddress': ' 1536 S Wenatchee Ave'
    },
     'url': 'https://www.bestwenatcheestorage.com/wa/south-wenatchee/about',
     'image': [
          'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/south-wenatchee-self-storage-11.jpg'
         ],
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '(509) 662-2600',
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone': '(509) 662-2600',
      'contactType': 'customer service'
    }],
    'email': 'selfstorageinc@hotmail.com',
    'sameAs': [
      '',
      '',
      ''
    ]

};

export const contactPageLocation2Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': `Leo's Self Storage`,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Wenatchee',
      'postalCode': '98801',
      'streetAddress': ' 1313 N Wenatchee Ave'
    },
     'url': 'https://www.bestwenatcheestorage.com/wa/leos-self-storage/about',
     'image': [
          'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/leos-self-storage-11.jpg'
         ],
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '(509) 662-2600',
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone': '(509) 662-2600',
      'contactType': 'customer service'
    }],
    'email': 'selfstorageinc@hotmail.com',
    'sameAs': [
      '',
      '',
      ''
    ]
};



export const ogHomePage = [
  {
    property: `og:description`,
    content: `Our South Wenatchee location offers a variety of unit types at very affordable rates! Check the rates and reserve today!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: `South Wenatchee Location | South Wenatchee Self Storage`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterHomePage = [
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:title`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Our South Wenatchee location offers a variety of unit types at very affordable rates! Check the rates and reserve today!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];


export const ogLocation1 = [
  {
    property: `og:title`,
    content: `South Wenatchee Location | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Our South Wenatchee location offers a variety of unit types at very affordable rates! Check the rates and reserve today!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/wa/south-wenatchee/storage-units`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterLocation1 = [
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:title`,
    content: `@South Wenatchee Location | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Our South Wenatchee location offers a variety of unit types at very affordable rates! Check the rates and reserve today!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];


export const ogLocation2 = [
  {
    property: `og:title`,
    content: `Leo's Self Storage | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Take a look at the rates and availability at our Leo's Self Storage location, then reserve your unit online in seconds, or call our office for more information!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `Leo's Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/wa/south-wenatchee/storage-units`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterLocation2 = [
  {
    name: `twitter:site`,
    content: `@Leo's Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:title`,
    content: `@Leo's Self Storage | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Take a look at the rates and availability at our Leo's Self Storage location, then reserve your unit online in seconds, or call our office for more information!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];



export const ogPayRentPage = [
  {
    property: `og:title`,
    content: `Pay Rent | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Pay your rent at either of our locations by clicking on this link and following our basic instructions!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/pay-rent`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterPayRentPage = [
  {
    name: `twitter:title`,
    content: `@Pay Rent | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Pay your rent at either of our locations by clicking on this link and following our basic instructions!`
  },
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const ogPayRentPageLocation1 = [
  {
    property: `og:title`,
    content: `Pay Rent | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Review our current rates and availability, then reserve your unit, or rent now in minutes with our easy online tenant portal!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/pay-rent/south-wenatchee/login`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterPayRentPageLocation1 = [
  {
    name: `twitter:title`,
    content: `@Pay Rent | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Review our current rates and availability, then reserve your unit, or rent now in minutes with our easy online tenant portal!`
  },
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const ogPayRentPageLocation2 = [
  {
    property: `og:title`,
    content: `Pay Rent | South Wenatchee Storage`
  },
  {
    property: `og:description`,
    content: `Follow the simple instructions on this page to access your account. Pay your rent 24 hours a day!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `Leo's Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/pay-rent/leos-self-storage/login`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterPayRentPageLocation2 = [
  {
    name: `twitter:title`,
    content: `@Pay Rent | South Wenatchee Storage`
  },
  {
    name: `twitter:description`,
    content: `Follow the simple instructions on this page to access your account. Pay your rent 24 hours a day!`
  },
  {
    name: `twitter:site`,
    content: `@Leo's Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];



export const ogStorageTipsPage = [
  {
    property: `og:title`,
    content: `Storage Tips  | South Wenatchee Self Stoage`
  },
  {
    property: `og:description`,
    content: `Take a moment to review our storage tips page and make your self storage experience a breeze!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/storage-tips`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterStorageTipsPage = [
  {
    name: `twitter:title`,
    content: `@Storage Tips  | South Wenatchee Self Stoage`
  },
  {
    name: `twitter:description`,
    content: `Take a moment to review our storage tips page and make your self storage experience a breeze!`
  },
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Stoage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const ogContactPage = [
  {
    property: `og:title`,
    content: `Contact Us | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Use the contact information or the contact form on this page to speak to one of our friendly self storage managers!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/contact-us`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterContactPage = [
  {
    name: `twitter:title`,
    content: `@Contact Us | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Use the contact information or the contact form on this page to speak to one of our friendly self storage managers!`
  },
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const ogContactPageLocation1 = [
  {
    property: `og:title`,
    content: `Contact Us | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Simply follow the on-page instructions, or call one of our friendly management professionals to learn how to access your account, today!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `South Wenatchee Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/contact-south-wenatchee`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterContactPageLocation1 = [
  {
    name: `twitter:title`,
    content: `@Contact Us | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Simply follow the on-page instructions, or call one of our friendly management professionals to learn how to access your account, today!`
  },
  {
    name: `twitter:site`,
    content: `@South Wenatchee Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];
export const ogContactPageLocation2 = [
  {
    property: `og:title`,
    content: `Contact Us | South Wenatchee Self Storage`
  },
  {
    property: `og:description`,
    content: `Take a moment to fill our out form or use the contact information to reach out to our friendly storage management team!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: `Leo's Self Storage`
  },
  {
    property: `og:url`,
    content: `https://www.bestwenatcheestorage.com/contact-leos-self-storage`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];

export const twitterContactPageLocation2 = [
  {
    name: `twitter:title`,
    content: `@Contact Us | South Wenatchee Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Take a moment to fill our out form or use the contact information to reach out to our friendly storage management team!`
  },
  {
    name: `twitter:site`,
    content: `@Leo's Self Storage`
  },
  {
    name: `twitter:card`,
    content: `summary`
  },
  {
    name: `twitter:creator`,
    content: `@syrasoft_connect`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Wenatchee_Multi/jpg/leos-self-storage-location.jpg`
  },
];
