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
location7PageContent, location7PageTitle,
location8PageContent, location8PageTitle,
location1PayrentPageTitle, location1PayrentPageContent,
location2PayrentPageTitle, location2PayrentPageContent,
location3PayrentPageTitle, location3PayrentPageContent,
location4PayrentPageTitle, location4PayrentPageContent,
location5PayrentPageTitle, location5PayrentPageContent,
location6PayrentPageTitle, location6PayrentPageContent,
location7PayrentPageTitle, location7PayrentPageContent,
location8PayrentPageTitle, location8PayrentPageContent,
location1ContactPageTitle, location1ContactPageContent,
location2ContactPageTitle, location2ContactPageContent,
location3ContactPageTitle, location3ContactPageContent,
location4ContactPageTitle, location4ContactPageContent,
location5ContactPageTitle, location5ContactPageContent,
location6ContactPageTitle, location6ContactPageContent,
location7ContactPageTitle, location7ContactPageContent,
location8ContactPageTitle, location8ContactPageContent } from '../data/title';
import { contactsLocation1,
  contactsLocation2,
  contactsLocation3,contactsLocation4,contactsLocation5,contactsLocation6,contactsLocation7,contactsLocation8,
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
const contactIndex7 = contactsLocation7.findIndex(x => x.label === 'Phone: ');
const contactIndex8 = contactsLocation8.findIndex(x => x.label === 'Phone: ');


const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');
const emailIndex4 = contactsLocation4.findIndex(x => x.label === 'Email: ');
const emailIndex5 = contactsLocation5.findIndex(x => x.label === 'Email: ');
const emailIndex6 = contactsLocation6.findIndex(x => x.label === 'Email: ');
const emailIndex7 = contactsLocation7.findIndex(x => x.label === 'Email: ');
const emailIndex8 = contactsLocation8.findIndex(x => x.label === 'Email: ');

  
export const nameLocation1 = `AFFORDABLE STORAGE #1 - 260 N GROVE`;
export const nameLocation2 = `AFFORDABLE STORAGE #2 - 201 N GROVE`;
export const nameLocation3 = `AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE`;
export const nameLocation4 = `AFFORDABLE STORAGE #4 - 817 S. GETTY`;
export const nameLocation5 = `AFFORDABLE STORAGE #5 - 430 S HWY 83`;
export const nameLocation6 = `AFFORDABLE STORAGE #6 - 500 E. GARDEN`;
export const nameLocation7 = `AFFORDABLE STORAGE #7 - 2633 E. MAIN ST`;
export const nameLocation8 = `AFFORDABLE STORAGE #8 - 244 N. GROVE`;



export const location1 = `260-n-grove`;
export const location2 = `201-n-grove`;
export const location3 = `246-w-south-lane`;
export const location4 = `817-s-getty`;
export const location5 = `430-s-hwy-83`;
export const location6 = `500-east-garden-street`;
export const location7 = `2633-east-main-street`;
export const location8 = `244-n-grove`;


export const urlLocation1 = `${environment.websiteUrl}/${environment.locationName}/260-n-grove/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/${environment.locationName}/201-n-grove/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/${environment.locationName}/246-w-south-lane/storage-units`;
export const urlLocation4 = `${environment.websiteUrl}/${environment.locationName}/817-s-getty/storage-units`;
export const urlLocation5 = `${environment.websiteUrl}/${environment.locationName}/430-s-hwy-83/storage-units`;
export const urlLocation6 = `${environment.websiteUrl}/${environment.locationName}/500-east-garden-street/storage-units`;
export const urlLocation7 = `${environment.websiteUrl}/${environment.locationName}/2633-east-main-street/storage-units`;
export const urlLocation8 = `${environment.websiteUrl}/${environment.locationName}/244-n-grove/storage-units`;

export const description1 = `brick self storage facility front office with a green lawn
                             in the front and blue sky above`;

export const description2 = `Our AFFORDABLE STORAGE #2 - 201 N GROVE location has a number of regular and climate controlled unit types `;

export const description3 = `Our AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;
export const description4 = `Our AFFORDABLE STORAGE #4 - 817 S. GETTY location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;
export const description5 = `Our AFFORDABLE STORAGE #5 - 430 S HWY 83 location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;   
export const description6 = `Our AFFORDABLE STORAGE #6 - 500 E. GARDEN location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;
export const description7 = `Our AFFORDABLE STORAGE #7 - 2633 E. MAIN ST location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;
export const description8 = `Our AFFORDABLE STORAGE #8 - 244 N. GROVE location has a number of regular and climate controlled unit types ideal
                             for just about any self storage need at an affordable price!  Our 24-hour access policy
                             makes coming and going on your schedule a breeze!`;                                                                               

export const maplocation1 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation2 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation3 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation4 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation5 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation6 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation7 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';
export const maplocation8 = 'https://goo.gl/maps/MZ2bUNFNT1HWfDfw5';

export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': '',
      'addressLocality': '',
      'addressRegion': '',
      'postalCode': '',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': 'United state'
}

export const addressLoaction3 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 
export const addressLoaction4 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 
export const addressLoaction5 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 
export const addressLoaction6 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 
export const addressLoaction7 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 
export const addressLoaction8 = {
  '@type': '',
  'streetAddress': '',
  'addressLocality': '',
  'addressRegion': '',
  'postalCode': '',
  'addressCountry': ''
} 




export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-1.jpg',
  '',
  ''
 ]

 export const imageLocation2 = [
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-2.jpg',
      '',
      ''
 ]

 export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-3.jpg',
  '',
  ''
 ]

 export const imageLocation4 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-4.jpg',
  '',
  ''
 ]
 export const imageLocation5 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-5.jpg',
  '',
  ''
 ]
 export const imageLocation6 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-5.jpg',
  '',
  ''
 ]
 export const imageLocation7 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-5.jpg',
  '',
  ''
 ]
 export const imageLocation8 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Uvalde_Affordable_Storage/jpg/affordable-storage-5.jpg',
  '',
  ''
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
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Uvalde_Affordable_Storage/jpg/sample-self-storage-north.jpg'
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
    'latitude': 30.4222526,
    'longitude':  -87.8864467
  },
  'url': urlLocation4,
  'telephone': contactsLocation4[contactIndex4].data,

  'priceRange': '$30 - $175',
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
'ratingValue': '5',
'bestRating': '5',
'reviewCount': ''
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 30.4222526,
    'longitude':  -87.8864467
  },
  'url': urlLocation5,
  'telephone': contactsLocation5[contactIndex5].data,

  'priceRange': '$30 - $175',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
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
'ratingValue': '5',
'bestRating': '5',
'reviewCount': ''
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 30.4222526,
    'longitude':  -87.8864467
  },
  'url': urlLocation6,
  'telephone': contactsLocation6[contactIndex6].data,

  'priceRange': '$30 - $175',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
'hasMap': maplocation6,
  'acceptsReservations': 'True'


};
export const Location7Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation7,
  '@id': environment.websiteUrl,
  'name': nameLocation7,
   'description': description7 || location7PageContent,
  'address': addressLoaction7,
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
  'url': urlLocation7,
  'telephone': contactsLocation7[contactIndex7].data,

  'priceRange': '$30 - $175',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
'hasMap': maplocation7,
  'acceptsReservations': 'True'


};
export const Location8Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation8,
  '@id': environment.websiteUrl,
  'name': nameLocation8,
   'description': description8 || location8PageContent,
  'address': addressLoaction8,
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
  'url': urlLocation8,
  'telephone': contactsLocation8[contactIndex8].data,

  'priceRange': '$30 - $175',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
'hasMap': maplocation8,
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
export const contactPageLocation7Script = {
  '@context': 'http://schema.org',
  '@type': 'Selfstorage',
  'name': nameLocation7,
  'address': addressLoaction7,
   'url': urlLocation7,
   'image': imageLocation7,
  'contactPoint': [{
    '@type': 'ContactPoint',
    'telephone': contactsLocation7[contactIndex7].data,
    'contactType': 'reservations'
  }, {
    '@type': 'ContactPoint',
    'telephone': contactsLocation7[contactIndex7].data,
    'contactType': 'customer service'
  }],
  'email': contactsLocation7[emailIndex7].data,
  'sameAs': [
    '',
    '',
    ''
  ]

};

export const contactPageLocation8Script = {
  '@context': 'http://schema.org',
  '@type': 'Selfstorage',
  'name': nameLocation8,
  'address': addressLoaction8,
   'url': urlLocation8,
   'image': imageLocation8,
  'contactPoint': [{
    '@type': 'ContactPoint',
    'telephone': contactsLocation8[contactIndex8].data,
    'contactType': 'reservations'
  }, {
    '@type': 'ContactPoint',
    'telephone': contactsLocation8[contactIndex8].data,
    'contactType': 'customer service'
  }],
  'email': contactsLocation8[emailIndex8].data,
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
    content: imageLocation1[0]
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
    content: imageLocation1[0]
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
    content: imageLocation2[0]
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
    content: imageLocation3[0]
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
    content: imageLocation4[0]
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
    content: location5PageTitle
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
    content: imageLocation5[0]
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
    content: imageLocation6[0]
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

export const ogLocation7 = [
  {
    property: `og:title`,
    content: location7PageTitle
  },
  {
    property: `og:description`,
    content: location7PageContent
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
    content: urlLocation7
  },
  {
    property: `og:image`,
    content: imageLocation7[0]
  },
];

export const twitterLocation7 = [
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
    content: `@${location7PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location7PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation7[0]
  },
];

export const ogLocation8 = [
  {
    property: `og:title`,
    content: location8PageTitle
  },
  {
    property: `og:description`,
    content: location8PageContent
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
    content: urlLocation8
  },
  {
    property: `og:image`,
    content: imageLocation8[0]
  },
];

export const twitterLocation8 = [
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
    content: `@${location8PageTitle}`
  },
  {
    name: `twitter:description`,
    content: location8PageContent
  },
  {
    name: `twitter:image`,
    content: imageLocation8[0]
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
    content: imageLocation1[0]
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
    content: imageLocation1[0]
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
    content: imageLocation1[0]
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
    content: imageLocation3[0]
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
    content:  location4PayrentPageTitle
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
    content: imageLocation4[0]
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
    content:  location5PayrentPageTitle
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
    content: imageLocation5[0]
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
    content:  location6PayrentPageTitle
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
    content: imageLocation6[0]
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
export const ogPayRentPageLocation7 = [
  {
    property: `og:title`,
    content:  location7PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location7PayrentPageContent
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
    content: `${environment.websiteUrl}/pay-rent/${location7}/login`
  },
  {
    property: `og:image`,
    content: imageLocation7[0]
  },
];
export const twitterPayRentPageLocation7 = [
  {
    name: `twitter:title`,
    content: `@${location7PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location7PayrentPageContent
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
    content: imageLocation7[0]
  },
];

export const ogPayRentPageLocation8 = [
  {
    property: `og:title`,
    content:  location8PayrentPageTitle
  },
  {
    property: `og:description`,
    content: location8PayrentPageContent
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
    content: `${environment.websiteUrl}/pay-rent/${location8}/login`
  },
  {
    property: `og:image`,
    content: imageLocation8[0]
  },
];
export const twitterPayRentPageLocation8 = [
  {
    name: `twitter:title`,
    content: `@${location8PayrentPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location8PayrentPageContent
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
    content: imageLocation8[0]
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
    content: imageLocation1[0]
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
    content: imageLocation1[0]
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
    content: imageLocation1[0]
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
    content: imageLocation2[0]
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
    content: imageLocation3[0]
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
    content: location4ContactPageTitle
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
    content: imageLocation4[0]
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
    content: location5ContactPageTitle
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
    content: imageLocation5[0]
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
    content: location6ContactPageTitle
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
    content: imageLocation6[0]
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
export const ogContactPageLocation7 = [
  {
    property: `og:title`,
    content: location7ContactPageTitle
  },
  {
    property: `og:description`,
    content: location7ContactPageContent
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
    content: `${environment.websiteUrl}/contact-${location7}`
  },
  {
    property: `og:image`,
    content: imageLocation7[0]
  },
];

export const twitterContactPageLocation7 = [
  {
    name: `twitter:title`,
    content: `@${location7ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location7ContactPageContent
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
    content: imageLocation7[0]
  },
];export const ogContactPageLocation8 = [
  {
    property: `og:title`,
    content: location8ContactPageTitle
  },
  {
    property: `og:description`,
    content: location8ContactPageContent
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
    content: `${environment.websiteUrl}/contact-${location8}`
  },
  {
    property: `og:image`,
    content: imageLocation8[0]
  },
];

export const twitterContactPageLocation8 = [
  {
    name: `twitter:title`,
    content: `@${location8ContactPageTitle}`
  },
  {
    name: `twitter:description`,
    content: location8ContactPageContent
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
    content: imageLocation8[0]
  },
];

