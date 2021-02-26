import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle,
location1PageContent, location2PageTitle,
location2PageContent, location1PageTitle,
location3PageContent, location3PageTitle,
location4PageContent, location4PageTitle,
location5PageContent, location5PageTitle } from '../data/title';
import { featuresList } from '../data/home';
import { contactsLocation1, hoursLocation1, 
  contactsLocation2, hoursLocation2, 
  contactsLocation3, hoursLocation3, 
  contactsLocation4, hoursLocation4, 
  contactsLocation5, hoursLocation5, 
 } from '../data/contact';

 const openingHoursLocation1 = [];
hoursLocation1.filter( hour => {
  if (hour.label !== 'Access hours: ') {
    openingHoursLocation1.push(hour.label + hour.data)
  }
})

const openingHoursLocation2 = [];
hoursLocation2.filter( hour => {
  if (hour.label !== 'Access hours: ') {
    openingHoursLocation2.push(hour.label + hour.data)
  }
})

const openingHoursLocation3 = [];
hoursLocation3.filter( hour => {
  if (hour.label !== 'Access hours: ') {
    openingHoursLocation3.push(hour.label + hour.data)
  }
})

const openingHoursLocation4 = [];
hoursLocation4.filter( hour => {
  if (hour.label !== 'Access hours: ') {
    openingHoursLocation4.push(hour.label + hour.data)
  }
})


const openingHoursLocation5 = [];
hoursLocation5.filter( hour => {
  if (hour.label !== 'Access hours: ') {
    openingHoursLocation5.push(hour.label + hour.data)
  }
})
 
const contactIndex1 = contactsLocation1.findIndex(x => x.label === 'Phone: ');
const contactIndex2 = contactsLocation2.findIndex(x => x.label === 'Phone: ');
const contactIndex3 = contactsLocation3.findIndex(x => x.label === 'Phone: ');
const contactIndex4 = contactsLocation4.findIndex(x => x.label === 'Phone: ');
const contactIndex5 = contactsLocation5.findIndex(x => x.label === 'Phone: ');

const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');
const emailIndex4 = contactsLocation4.findIndex(x => x.label === 'Email: ');
const emailIndex5 = contactsLocation5.findIndex(x => x.label === 'Email: ');
  
export const nameLocation1 = `AllSpace Storage - Poughkeepsie/Arlington`;
export const nameLocation2 = `AllSpace Storage - Poughkeepsie/Hyde Park`;
export const nameLocation3 = `AllSpace Storage - Highland`;
export const nameLocation4 = `AllSpace Storage - Kingston/Lake Katrine`;
export const nameLocation5 = `AllSpace Storage - Pawling`;

export const location1 = `poughkeepsie/arlington`;
export const location2 = `poughkeepsie/hyde-park`;
export const location3 = `highland`;
export const location4 = `lake-katrine`;
export const location5 = `pawling`;

export const urlLocation1 = `${environment.websiteUrl}/location/poughkeepsie/arlington/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/location/poughkeepsie/hyde-park/storage-un`;
export const urlLocation3 = `${environment.websiteUrl}/location/highland/storage-units`;
export const urlLocation4 = `${environment.websiteUrl}/location/lake-katrine/storage-units`;
export const urlLocation5 = `${environment.websiteUrl}/location/pawling/storage-units`;


export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': '189 Manchester Road',
      'addressLocality': 'Poughkeepsie',
      'addressRegion': 'NY',
      'postalCode': '12603',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': '120 Salt Point Turnpike',
  'addressLocality': 'Poughkeepsie',
  'addressRegion': 'NY',
  'postalCode': '12603',
  'addressCountry': 'United state'
}

export const addressLoaction3 = {
  '@type': 'PostalAddress',
  'streetAddress': '480 Route 299',
  'addressLocality': 'Highland',
  'addressRegion': 'NY',
  'postalCode': '12528',
  'addressCountry': 'United state'
} 

export const addressLoaction4 = {
  '@type': 'PostalAddress',
  'streetAddress': '1693 Ulster Avenue',
  'addressLocality': 'Lake Katrine',
  'addressRegion': 'NY',
  'postalCode': '12449',
  'addressCountry': 'United state'
}

export const addressLoaction5 = {
  '@type': 'PostalAddress',
  'streetAddress': '165 Route 22',
  'addressLocality': 'Pawling',
  'addressRegion': 'NY',
  'postalCode': '12564',
  'addressCountry': 'United state'
}

export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-Arlington/poughkeepsie-arlington-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-Arlington/poughkeepsie-arlington%20%282%29.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-Arlington/poughkeepsie-arlington%20%281%29.jpg'
 ]

 export const imageLocation2 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-HydePark/poughkeepsie-hydepark-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-HydePark/poughkeepsie-hydepark%20%282%29.jpg',
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Poughkeepsie-HydePark/poughkeepsie-hydepark%20%281%29.jpg'
 ]

 export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/NewPaltz-Highland/new-paltz-highland%20%281%29.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/NewPaltz-Highland/new-paltz-highland%20%282%29.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/NewPaltz-Highland/new-paltz-highland%20-%2011.jpg'
 ]

 export const imageLocation4 =  [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron%20-%201x1.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron%2016x9.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron%204x3.jpg'
 ]

 export const imageLocation5 =  [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Pawling-Brewster/pawling-brewster-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Pawling-Brewster/pawling-brewster%20%282%29.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/AllSpace_Images/Photos/Pawling-Brewster/pawling-brewster%20%281%29.jpg'
 ]

export const homePageScript = [ 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation1,
    'url': urlLocation1,
    'openingHours': ["Mo-Sa 10:00- 14:00\", \"Su Closed"],
    'priceRange': '$65',
      'address' : addressLoaction1,
    'telephone': contactsLocation1[contactIndex1].data,
    'image' : imageLocation1,
    'logo': 'https://s3.amazonaws.com/syrasoft-tenant-facing-websites/AllSpace_Images/allspace-logo.jpg'
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation2,
    'image' : imageLocation2,
    'telephone': contactsLocation2[contactIndex2].data,
    'email': contactsLocation2[emailIndex2].data,
    'address': addressLoaction2,
    'openingHours': ["Mo-Fr 09:00-17:00\", \"Sa 10:00-16:00\" , \"Su Closed"],
    'priceRange': '$290 - $64',
    'url' : urlLocation2,
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation3,
    'image' : imageLocation3,
    'telephone' : contactsLocation3[contactIndex3].data,
    'email' : contactsLocation3[emailIndex3].data,
    'address':addressLoaction3,
    'priceRange': '$55 - $165',
    'openingHours': ["Mo-Fr 10:00-17:00\", \"Sa 10:00-16:00\" , \"Su Closed"],
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
     'priceRange': '',
     'openingHours': ["Mo-Fr 09:00-17:00\", \"Sa 09:00-16:00\" , \"Su Closed"],
     'url' : urlLocation4
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation5,
    'image' :imageLocation5,
    'telephone' : contactsLocation5[contactIndex5].data,
    'email' : contactsLocation5[emailIndex5].data,
    'address': addressLoaction5,
    'priceRange': '$65 - $185',
    'openingHours': ["Mo-Fr 10:00-17:00\", \"Sa 10:00-14:00\" , \"Su 09:00-15:00"],
    'url' : urlLocation5
  }
 ];


export const Location1Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation1,
    '@id': environment.websiteUrl,
    'name': nameLocation1,
     'description': location1PageContent,
    'address': addressLoaction1,
    'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.1',
    'bestRating': '5',
    'reviewCount': '28'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 41.721533306077724,
      'longitude': -73.8982289800549
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$65',
    'openingHours': ["Mo-Sa 10:00- 14:00\", \"Su Closed"],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Credit card, Online Payment',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   "hasMap": "https://goo.gl/maps/CWQT6wvbVtsopjCN8",

    'acceptsReservations': 'True'
};

export const Location2Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation2,
    '@id': environment.websiteUrl,
    'name': nameLocation2,
     'description': location2PageContent,
    'address': addressLoaction2,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '4.1',
  'bestRating': '5',
  'reviewCount': '28'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 41.72127704549475,
      'longitude': -73.89908733065363
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$290 - $64',
    'openingHours': ["Mo-Fr 09:00-17:00\", \"Sa 10:00-16:00\" , \"Su Closed"],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Credit card, Online Payment',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   "hasMap": "https://goo.gl/maps/CWQT6wvbVtsopjCN8",

    'acceptsReservations': 'True'

};

export const Location3Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image':imageLocation3,
    '@id': environment.websiteUrl,
    'name': nameLocation3,
     'description': location3PageContent,
    'address': addressLoaction3,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '3.7',
  'bestRating': '5',
  'reviewCount': '15'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 41.73916039035729,
      'longitude':  -74.02495659003841
    },
    'url': urlLocation3,
    'telephone': contactsLocation3[contactIndex3].data,

    'priceRange': '$55 - $165',
    'openingHours': ["Mo-Fr 10:00-17:00\", \"Sa 10:00-16:00\" , \"Su Closed"],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Credit card, Online Payment',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
"hasMap": "https://goo.gl/maps/3gGbXMtnCeAtB9p28",
    'acceptsReservations': 'True'


};

export const Location4Script = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    'image': imageLocation4,
    '@id': environment.websiteUrl,
    'name': nameLocation4,
     'description': 'Our Middletown location serves Middletown, Goshen and Wallkill with easy access to affordable, well maintained, fully-fenced in self storage units 7 days a week!',
    'address': addressLoaction4,
   'aggregateRating': {
  '@type': 'AggregateRating',
  'ratingValue': '4.3',
  'bestRating': '5',
  'reviewCount': '22'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude':41.981793917723955,
      'longitude': -73.9898310844328
    },
    'url': urlLocation4,
    'telephone': contactsLocation4[contactIndex4].data,

    'priceRange': '',
    'openingHours': ["Mo-Fr 09:00-17:00\", \"Sa 09:00-16:00\" , \"Su Closed"],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Credit card, Online Payment',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   "hasMap":"https://goo.gl/maps/n2ub6ZDTMdNJSKpVA",

    'acceptsReservations': 'True'

};

export const Location5Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation5,
  '@id': environment.websiteUrl,
  'name': nameLocation5,
   'description': location5PageContent,
  'address': addressLoaction5,
 'aggregateRating': {
'@type': 'AggregateRating',
'ratingValue': '4.4',
'bestRating': '5',
'reviewCount': '7'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 41.537565096224796, 
      'longitude': -73.58507733714322
  },
  'url': urlLocation5,
  'telephone': contactsLocation5[contactIndex5].data,

  'priceRange': '$65 - $185',
  'openingHours': ["Mo-Fr 10:00-17:00\", \"Sa 10:00-14:00\" , \"Su 09:00-15:00"],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Credit card, Online Payment',
   'areaServed': {
'@type': 'State',
'name': 'New York'
 },
"hasMap": "https://goo.gl/maps/f7UXYuhZyyMf81eS7",
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
  'address':addressLoaction5,
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

export const ogPayRentPageLocation2 = [
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
    content: imageLocation2[0]
  },
];

export const ogPayRentPageLocation3 = [
  {
    property: `og:title`,
    content:  payRentPageTitle
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
    content: imageLocation3[0]
  },
];

export const ogPayRentPageLocation4 = [
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
    content: imageLocation4[0]
  },
];

export const ogPayRentPageLocation5 = [
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
    content: `${environment.websiteUrl}/pay-rent/${location5}/login`
  },
  {
    property: `og:image`,
    content: imageLocation4[1]
  },
];

export const twitterPayRentPageLocation5 = [
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
    content: imageLocation4[0]
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
    content: imageLocation1[0]
  },
];
export const ogContactPageLocation2 = [
  {
    property: `og:title`,
    content: `${contactPageTitle}`
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
    content:  imageLocation2[0]
  },
];
export const ogContactPageLocation3 = [
  {
    property: `og:title`,
    content: `${contactPageTitle}`
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
    content: imageLocation3[0]
  },
];

export const ogContactPageLocation4 = [
  {
    property: `og:title`,
    content: `${contactPageTitle}`
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
    content: imageLocation4[0]
  },
];

export const ogContactPageLocation5 = [
  {
    property: `og:title`,
    content: `${contactPageTitle}`
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
    content: imageLocation5[0]
  },
];