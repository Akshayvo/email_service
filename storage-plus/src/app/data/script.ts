import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle,
location1PageContent, location2PageTitle,
location2PageContent, location1PageTitle,
location3PageContent, location3PageTitle,
location4PageContent, location4PageTitle,
location5PageContent, location5PageTitle,
location6PageContent, location6PageTitle,
location1PayrentPageTitle, location1PayrentPageContent,
location2PayrentPageTitle, location2PayrentPageContent,
location3PayrentPageTitle, location3PayrentPageContent,
location4PayrentPageTitle, location4PayrentPageContent,
location5PayrentPageTitle, location5PayrentPageContent,
location6PayrentPageTitle, location6PayrentPageContent,
location1ContactPageTitle, location1ContactPageContent,
location2ContactPageTitle, location2ContactPageContent,
location3ContactPageTitle, location3ContactPageContent,
location4ContactPageTitle, location4ContactPageContent,
location5ContactPageTitle, location5ContactPageContent,
location6ContactPageTitle, location6ContactPageContent, } from '../data/title';
import { featuresList } from '../data/home';
import { contactsLocation1, hoursLocation1, 
  contactsLocation2, hoursLocation2, 
  contactsLocation3, hoursLocation3, 
  contactsLocation4, hoursLocation4,
  contactsLocation5, hoursLocation5,
  contactsLocation6, hoursLocation6, 
 } from '../data/contact';

//  const openingHoursLocation1 = [];
// hoursLocation1.filter( hour => {
//   if (hour.label !== 'Access hours: ') {
//     openingHoursLocation1.push(hour.label + hour.data)
//   }
// })

// const openingHoursLocation2 = [];
// hoursLocation2.filter( hour => {
//   if (hour.label !== 'Access hours: ') {
//     openingHoursLocation2.push(hour.label + hour.data)
//   }
// })

// const openingHoursLocation3 = [];
// hoursLocation3.filter( hour => {
//   if (hour.label !== 'Access hours: ') {
//     openingHoursLocation3.push(hour.label + hour.data)
//   }
// })

// const openingHoursLocation4 = [];
// hoursLocation4.filter( hour => {
//   if (hour.label !== 'Access hours: ') {
//     openingHoursLocation4.push(hour.label + hour.data)
//   }
// })



 
const contactIndex1 = contactsLocation1.findIndex(x => x.label === 'Phone: ');
const contactIndex2 = contactsLocation2.findIndex(x => x.label === 'Phone: ');
const contactIndex3 = contactsLocation3.findIndex(x => x.label === 'Phone: ');
const contactIndex4 = contactsLocation4.findIndex(x => x.label === 'Phone: ');
const contactIndex5 = contactsLocation5.findIndex(x => x.label === 'Phone: ');
const contactIndex6 = contactsLocation6.findIndex(x => x.label === 'Phone: ');

const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');
const emailIndex4 = contactsLocation4.findIndex(x => x.label === 'Email: ');
const emailIndex5 = contactsLocation5.findIndex(x => x.label === 'Email: ');
const emailIndex6 = contactsLocation6.findIndex(x => x.label === 'Email: ');
  
export const nameLocation1 = `Storage Plus of Baldwin County - Foley`;
export const nameLocation2 = `Storage Plus of Baldwin County - Silverhill`;
export const nameLocation3 = `Storage Plus of Baldwin County - Barnwell`;
export const nameLocation4 = `Storage Plus of Baldwin County - Belforest`;
export const nameLocation5 = `Storage Plus of Baldwin County - Fairhope`;
export const nameLocation6 = `Storage Plus of Baldwin County - Robertsdale`;


export const location1 = `foley`;
export const location2 = `silverhill`;
export const location3 = `barnwell`;
export const location4 = `belforest`;
export const location5 = `barnwell`;
export const location6 = `robertsdale`;


export const urlLocation1 = `${environment.websiteUrl}/location/foley/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/location/silverhill/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/location/barnwell/storage-units`;
export const urlLocation4 = `${environment.websiteUrl}/location/belforest/storage-units`;
export const urlLocation5 = `${environment.websiteUrl}/location/fairhope/storage-units`;
export const urlLocation6 = `${environment.websiteUrl}/location/robertsdale/storage-units`;


export const description1 = `brick self storage facility front office with a green lawn
                             in the front and blue sky above`;

export const description2 = `Our Silverhill location has a number of regular and climate controlled unit types `;

export const description3 = `Our Barnwell location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;

export const description4 = `Our Belfast location has a number of units in both regular and climate controlled
                             varieties to cover all of your residential or commercial self storage needs.`;

export const description5 = `Our Fairhope location has a number of unit sizes ideal for just about any self storage
                             need at an affordable price!  Our 24-hour access policy makes coming and going on your
                             schedule a breeze!`;

export const description6 = `Our Robertsdale location has a number of unit sizes ideal for just about any self
                             storage need at great prices!  Our 24-hour access policy makes coming and going
                             on your schedule a breeze!`;

export const maplocation1 = 'https://goo.gl/maps/FqeHH1xEv8AP4GLg6';
export const maplocation2 = 'https://goo.gl/maps/FTweCN2UdexnsJB49';
export const maplocation3 = 'https://goo.gl/maps/EPmskBQ9TgFTBXcb8';
export const maplocation4 = 'https://goo.gl/maps/skmJTukq9K3xRFbS7';
export const maplocation5 = 'https://goo.gl/maps/FANSU6w7QY9vCpiDA';
export const maplocation6 = 'https://goo.gl/maps/kt1bhA6aHeRmjXsN7';


export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': '17860 US-98',
      'addressLocality': 'Foley',
      'addressRegion': 'AL',
      'postalCode': '36535',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': '15410 AL-104',
  'addressLocality': 'Silverhill',
  'addressRegion': 'AL',
  'postalCode': '36576',
  'addressCountry': 'United state'
}

export const addressLoaction3 = {
  '@type': 'PostalAddress',
  'streetAddress': '8089A US-98',
  'addressLocality': 'Fairhope',
  'addressRegion': 'AL',
  'postalCode': '36532',
  'addressCountry': 'United state'
} 

export const addressLoaction4 = {
  '@type': 'PostalAddress',
  'streetAddress': '11455 Co Rd 64',
  'addressLocality': 'Daphne',
  'addressRegion': 'AL',
  'postalCode': '36526',
  'addressCountry': 'United state'
}

export const addressLoaction5 = {
  '@type': 'PostalAddress',
  'streetAddress': '21193 AL-181',
  'addressLocality': 'Fairhope',
  'addressRegion': 'AL',
  'postalCode': '36532',
  'addressCountry': 'United state'
}

export const addressLoaction6 = {
  '@type': 'PostalAddress',
  'streetAddress': '20218 US-90',
  'addressLocality': 'Robertsdale',
  'addressRegion': 'AL',
  'postalCode': '36567',
  'addressCountry': 'United state'
}



export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-foley11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-foley196.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-foley43.jpg'
 ]

 export const imageLocation2 = [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-silverhill-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-silverhill-169.jpg',
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-silverhill-43.jpg'
 ]

 export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-43.jpg'
 ]

 export const imageLocation4 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-43.jpg'
 ]

 export const imageLocation5 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-county-belforest-43.jpg'
 ]

 export const imageLocation6 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-robertsdale-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-robertsdale-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/storage-plus-of-baldwin-robertsdale-43.jpg'
 ]

export const homePageScript = [ 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation1,
    'url': urlLocation1,
    'openingHours': ['Mo-Fr 08:30 - 17:00'],
    'priceRange': '$40 - $190',
      'address' : addressLoaction1,
    'telephone': contactsLocation1[contactIndex1].data,
    'image' : imageLocation1,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/jpg/storage-plus-baldwin-county-logo.jpg'
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation2,
    'image' : imageLocation2,
    'telephone': contactsLocation2[contactIndex2].data,
    'email': contactsLocation2[emailIndex2].data,
    'address': addressLoaction2,
    'openingHours': [ ],
    'priceRange': '$40 - $110',
    'url' : urlLocation2,
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation3,
    'image' : imageLocation3,
    'telephone' : contactsLocation3[contactIndex3].data,
    'email' : contactsLocation3[emailIndex3].data,
    'address': addressLoaction3,
    'priceRange': '$30 - $175',
    'openingHours': [],
    'url' : urlLocation3
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation4,
    'image' : imageLocation4,
    'telephone' : contactsLocation4[contactIndex4].data,
    'email' : contactsLocation4[emailIndex4].data,
    'address': addressLoaction4,
     'priceRange': '$30 - $125',
     'openingHours': [],
     'url' : urlLocation4
  },
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation5,
    'image' : imageLocation5,
    'telephone' : contactsLocation5[contactIndex5].data,
    'email' : contactsLocation5[emailIndex5].data,
    'address': addressLoaction5,
     'priceRange': '$40 - $135',
     'openingHours': [],
     'url' : urlLocation5
  },
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation6,
    'image' : imageLocation6,
    'telephone' : contactsLocation6[contactIndex6].data,
    'email' : contactsLocation6[emailIndex6].data,
    'address': addressLoaction6,
     'priceRange': '$40 - $110',
     'openingHours': [],
     'url' : urlLocation6
  },
 ];


export const Location1Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation1,
    '@id': environment.websiteUrl,
    'name': nameLocation1,
     'description': description1 || location1PageContent,
    'address': addressLoaction1,
    'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.7',
    'bestRating': '5',
    'reviewCount': '3'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.4089297,
      'longitude': -87.7331084,
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$40 - $190',
    'openingHours': ['Mo-Fr 08:30 - 17:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   'hasMap': maplocation1,

    'acceptsReservations': 'True'
};

export const Location2Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation2,
    '@id': environment.websiteUrl,
    'name': nameLocation2,
     'description': description2 || location2PageContent,
    'address': addressLoaction2,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '4.7',
  'bestRating': '5',
  'reviewCount': '12'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.5445247,
      'longitude': -87.7604384
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$40 - $110',
    'openingHours': [ ],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   'hasMap': maplocation2,

    'acceptsReservations': 'True'

};

export const Location3Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation3,
    '@id': environment.websiteUrl,
    'name': nameLocation3,
     'description': description3 || location3PageContent,
    'address': addressLoaction3,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '5',
  'bestRating': '5',
  'reviewCount': ''
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.4222526,
      'longitude':  -87.8864467
    },
    'url': urlLocation3,
    'telephone': contactsLocation3[contactIndex3].data,

    'priceRange': '$30 - $175',
    'openingHours': [],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
'hasMap': maplocation3,
    'acceptsReservations': 'True'


};

export const Location4Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation4,
    '@id': environment.websiteUrl,
    'name': nameLocation4,
     'description': description4 || location4PageContent,
    'address': addressLoaction4,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '5',
  'bestRating': '5',
  'reviewCount': ''
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.607304,
      'longitude': -87.8104576
    },
    'url': urlLocation4,
    'telephone': contactsLocation4[contactIndex4].data,

    'priceRange': '$30 - $125',
    'openingHours': [],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   'hasMap': maplocation4,

    'acceptsReservations': 'True'

};

export const Location5Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation5,
  '@id': environment.websiteUrl,
  'name': nameLocation5,
   'description': description5 || location5PageContent,
  'address': addressLoaction5,
 'aggregateRating': {
'@type': 'AggregateRating',
'ratingValue': '4',
'bestRating': '5',
'reviewCount': '9'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 30.5345495,
    'longitude': -87.8561786
  },
  'url': urlLocation5,
  'telephone': contactsLocation5[contactIndex5].data,

  'priceRange': '$40 - $135',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
 'hasMap': maplocation5,

  'acceptsReservations': 'True'

};

export const Location6Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation6,
  '@id': environment.websiteUrl,
  'name': nameLocation6,
   'description': description6 || location6PageContent,
  'address': addressLoaction6,
 'aggregateRating': {
'@type': 'AggregateRating',
'ratingValue': '4.6',
'bestRating': '5',
'reviewCount': '10'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 30.5639016,
    'longitude': -87.6814587
  },
  'url': urlLocation6,
  'telephone': contactsLocation6[contactIndex6].data,

  'priceRange': '$40 - $115',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
 'hasMap': maplocation6,

  'acceptsReservations': 'True'

};



export const contactPageLocation1Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': nameLocation1,
    'address': addressLoaction1,
     'url': urlLocation1,
     'image':  imageLocation1,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone':  contactsLocation1[contactIndex1].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone':  contactsLocation1[contactIndex1].data,
      'contactType': 'customer service'
    }],
    'email': contactsLocation1[emailIndex1].data,
    'sameAs': [
      '',
      '',
      ''
    ]

};

export const contactPageLocation2Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': nameLocation2,
    'address': addressLoaction2,
     'url': urlLocation2,
     'image': imageLocation2,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone':  contactsLocation2[contactIndex2].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone':  contactsLocation2[contactIndex2].data,
      'contactType': 'customer service'
    }],
    'email': contactsLocation2[emailIndex2].data,
    'sameAs': [
      '',
      '',
      ''
    ]
};

export const contactPageLocation3Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': nameLocation3,
    'address': addressLoaction3,
     'url': urlLocation3,
     'image': imageLocation3,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': contactsLocation3[contactIndex3].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone': contactsLocation3[contactIndex3].data,
      'contactType': 'customer service'
    }],
    'email': contactsLocation3[emailIndex3].data,
    'sameAs': [
      '',
      '',
      ''
    ]

};

export const contactPageLocation4Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': nameLocation4,
    'address': addressLoaction4,
     'url': urlLocation4,
     'image': imageLocation4,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': contactsLocation4[contactIndex4].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone': contactsLocation4[contactIndex4].data,
      'contactType': 'customer service'
    }],
    'email': contactsLocation4[emailIndex4].data,
    'sameAs': [
      '',
      '',
      ''
    ]
};

export const contactPageLocation5Script = {
  '@context': 'http://schema.org',
  '@type': 'Selfstorage',
  'name': nameLocation5,
  'address': addressLoaction5,
   'url': urlLocation5,
   'image': imageLocation5,
  'contactPoint': [{
    '@type': 'ContactPoint',
    'telephone': contactsLocation5[contactIndex5].data,
    'contactType': 'reservations'
  }, {
    '@type': 'ContactPoint',
    'telephone': contactsLocation5[contactIndex5].data,
    'contactType': 'customer service'
  }],
  'email': contactsLocation5[emailIndex5].data,
  'sameAs': [
    '',
    '',
    ''
  ]
};

export const contactPageLocation6Script = {
  '@context': 'http://schema.org',
  '@type': 'Selfstorage',
  'name': nameLocation6,
  'address': addressLoaction6,
   'url': urlLocation6,
   'image': imageLocation6,
  'contactPoint': [{
    '@type': 'ContactPoint',
    'telephone': contactsLocation6[contactIndex6].data,
    'contactType': 'reservations'
  }, {
    '@type': 'ContactPoint',
    'telephone': contactsLocation6[contactIndex6].data,
    'contactType': 'customer service'
  }],
  'email': contactsLocation6[emailIndex6].data,
  'sameAs': [
    '',
    '',
    ''
  ]
};





export const ogHomePage = [
  {
    property: `og:description`,
    content: homePageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: homePageTitle
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: environment.websiteUrl,
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterHomePage = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${homePageTitle}`
  },
  {
    name: `twitter:description`,
    content: homePageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation1[0]
  },
];


export const ogLocation1 = [
  {
    property: `og:title`,
    content: location1PageTitle
  },
  {
    property: `og:description`,
    content: location1PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation1
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterLocation1 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location1PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location1PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation1[0]
  },
];


export const ogLocation2 = [
  {
    property: `og:title`,
    content: location2PageTitle
  },
  {
    property: `og:description`,
    content: location2PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation2
  },
  {
    property: `og:image`,
    content: imageLocation2[1]
  },
];

export const twitterLocation2 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location2PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location2PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation2[0]
  },
];


export const ogLocation3 = [
  {
    property: `og:title`,
    content: location3PageTitle
  },
  {
    property: `og:description`,
    content: location3PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation3
  },
  {
    property: `og:image`,
    content: imageLocation3[1]
  },
];

export const twitterLocation3 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location3PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location3PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation3[0]
  },
];

export const ogLocation4 = [
  {
    property: `og:title`,
    content: location4PageTitle
  },
  {
    property: `og:description`,
    content: location4PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation4
  },
  {
    property: `og:image`,
    content: imageLocation4[1]
  },
];

export const twitterLocation4 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location4PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location4PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation4[0]
  },
];

export const ogLocation5 = [
  {
    property: `og:title`,
    content: location4PageTitle
  },
  {
    property: `og:description`,
    content: location5PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation5
  },
  {
    property: `og:image`,
    content: imageLocation5[1]
  },
];

export const twitterLocation5 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location5PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location5PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation5[0]
  },
];

export const ogLocation6 = [
  {
    property: `og:title`,
    content: location6PageTitle
  },
  {
    property: `og:description`,
    content: location6PageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: urlLocation6
  },
  {
    property: `og:image`,
    content: imageLocation6[1]
  },
];

export const twitterLocation6 = [
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: `@${location6PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location6PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation6[0]
  },
];




export const ogPayRentPage = [
  {
    property: `og:title`,
    content: payRentPageTitle
  },
  {
    property: `og:description`,
    content: payRentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterPayRentPage = [
  {
    name: `twitter:title`,
    content: `@${payRentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: payRentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation1[0]
  },
];

export const ogPayRentPageLocation1 = [
  {
    property: `og:title`,
    content: location1PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location1PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location1}/login`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterPayRentPageLocation1 = [
  {
    name: `twitter:title`,
    content: `@${location1PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location1PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation1[0]
  },
];

export const ogPayRentPageLocation2 = [
  {
    property: `og:title`,
    content: location2PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location2PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location2}/login`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterPayRentPageLocation2 = [
  {
    name: `twitter:title`,
    content: `@${location2PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location2PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation2[0]
  },
];

export const ogPayRentPageLocation3 = [
  {
    property: `og:title`,
    content:  location3PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location3PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location3}/login`
  },
  {
    property: `og:image`,
    content: imageLocation3[1]
  },
];

export const twitterPayRentPageLocation3 = [
  {
    name: `twitter:title`,
    content: `@${location3PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location3PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation3[0]
  },
];

export const ogPayRentPageLocation4 = [
  {
    property: `og:title`,
    content: location4PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location4PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location4}/login`
  },
  {
    property: `og:image`,
    content: imageLocation4[1]
  },
];

export const twitterPayRentPageLocation4 = [
  {
    name: `twitter:title`,
    content: `@${location4PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location4PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation4[0]
  },
];

export const ogPayRentPageLocation5 = [
  {
    property: `og:title`,
    content: location5PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location5PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location5}/login`
  },
  {
    property: `og:image`,
    content: imageLocation5[1]
  },
];

export const twitterPayRentPageLocation5 = [
  {
    name: `twitter:title`,
    content: `@${location5PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location5PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation5[0]
  },
];

export const ogPayRentPageLocation6 = [
  {
    property: `og:title`,
    content: location6PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location6PayrentPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/pay-rent/${location6}/login`
  },
  {
    property: `og:image`,
    content: imageLocation6[1]
  },
];

export const twitterPayRentPageLocation6 = [
  {
    name: `twitter:title`,
    content: `@${location6PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location6PayrentPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation6[0]
  },
];



export const ogStorageTipsPage = [
  {
    property: `og:title`,
    content: storageTipsTitle
  },
  {
    property: `og:description`,
    content: storageTipsContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/storage-tips`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterStorageTipsPage = [
  {
    name: `twitter:title`,
    content: `@${storageTipsTitle}`
  },
  {
    name: `twitter:description`,
    content: storageTipsContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation1[0]
  },
];

export const ogContactPage = [
  {
    property: `og:title`,
    content: contactPageTitle
  },
  {
    property: `og:description`,
    content: contactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-us`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterContactPage = [
  {
    name: `twitter:title`,
    content: `@${contactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: contactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content:  imageLocation1[0]
  },
];

export const ogContactPageLocation1 = [
  {
    property: `og:title`,
    content: location1ContactPageTitle
  },
  {
    property: `og:description`,
    content: location1ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location1}`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];

export const twitterContactPageLocation1 = [
  {
    name: `twitter:title`,
    content: `@${location1ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location1ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation1[0]
  },
];


export const ogContactPageLocation2 = [
  {
    property: `og:title`,
    content: `${location2ContactPageTitle}`
  },
  {
    property: `og:description`,
    content: location2ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location2}`
  },
  {
    property: `og:image`,
    content: imageLocation2[1]
  },
];

export const twitterContactPageLocation2 = [
  {
    name: `twitter:title`,
    content: `@${location2ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location2ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content:  imageLocation2[0]
  },
];
export const ogContactPageLocation3 = [
  {
    property: `og:title`,
    content: `${location3ContactPageTitle}`
  },
  {
    property: `og:description`,
    content: location3ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location3}`
  },
  {
    property: `og:image`,
    content: imageLocation3[1]
  },
];

export const twitterContactPageLocation3 = [
  {
    name: `twitter:title`,
    content: `@${location3ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location3ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation3[0]
  },
];

export const ogContactPageLocation4 = [
  {
    property: `og:title`,
    content: `${location4ContactPageTitle}`
  },
  {
    property: `og:description`,
    content: location4ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location4}`
  },
  {
    property: `og:image`,
    content: imageLocation4[1]
  },
];

export const twitterContactPageLocation4 = [
  {
    name: `twitter:title`,
    content: `@${location4ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location4ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation4[0]
  },
];

export const ogContactPageLocation5 = [
  {
    property: `og:title`,
    content: `${location5ContactPageTitle}`
  },
  {
    property: `og:description`,
    content: location5ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location5}`
  },
  {
    property: `og:image`,
    content: imageLocation5[1]
  },
];

export const twitterContactPageLocation5 = [
  {
    name: `twitter:title`,
    content: `@${location5ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location5ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation5[0]
  },
];

export const ogContactPageLocation6 = [
  {
    property: `og:title`,
    content: `${location6ContactPageTitle}`
  },
  {
    property: `og:description`,
    content: location6ContactPageContent
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:site_name`,
    content: environment.facilityName
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}/contact-${location6}`
  },
  {
    property: `og:image`,
    content: imageLocation6[1]
  },
];

export const twitterContactPageLocation6 = [
  {
    name: `twitter:title`,
    content: `@${location6ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location6ContactPageContent
  },
  {
    name: `twitter:site`,
    content: `@${environment.facilityName}`
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
    content: imageLocation6[0]
  },
];



