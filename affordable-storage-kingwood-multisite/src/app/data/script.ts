import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle,
location1PageContent, location2PageTitle,
location2PageContent, location1PageTitle,
location3PageContent, location3PageTitle,
location1PayrentPageTitle, location1PayrentPageContent,
location2PayrentPageTitle, location2PayrentPageContent,
location3PayrentPageTitle, location3PayrentPageContent,
location1ContactPageTitle, location1ContactPageContent,
location2ContactPageTitle, location2ContactPageContent,
location3ContactPageTitle, location3ContactPageContent } from '../data/title';
import { contactsLocation1,
  contactsLocation2,
  contactsLocation3
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


const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');

  
export const nameLocation1 = `Units 1 - 107`;
export const nameLocation2 = `Units 108 - 199`;
export const nameLocation3 = ``;



export const location1 = `units-107`;
export const location2 = `units-199`;
export const location3 = ``;


export const urlLocation1 = `${environment.websiteUrl}/${environment.locationName}/units-107/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/${environment.locationName}/units-199/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/${environment.locationName}/location-3/storage-units`;

export const description1 = `Affordable Storage of Kingwood has been serving Kingwood, Humble, Atascocita, and the surrounding communities with clean, well-maintained, and affordable self storage and vehicle storage units in several sizes since 1986. As a family-owned operation, we understand that success comes from delivering amazing service and fair prices to our friends and neighbors. That’s why we built our storage facility with well-lit electrified units perfect for your boat, RV, trailer, or household belongings, and we offer the highest standard in customer service.`;

export const description2 = ``;

export const description3 = ``;

export const maplocation1 = 'https://goo.gl/maps/2Jz7V737iTyZsce57';
export const maplocation2 = 'https://goo.gl/maps/2Jz7V737iTyZsce57';
export const maplocation3 = '';

export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': '1602 Green Pine Dr',
      'addressLocality': 'Kingwood',
      'addressRegion': 'TX',
      'postalCode': '77339',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': '1602 Green Pine Dr',
  'addressLocality': 'Kingwood',
  'addressRegion': 'TX',
  'postalCode': '77339',
  'addressCountry': 'United state'
} 




export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-43.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-169.jpg'
 ]

 export const imageLocation2 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-43.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-169.jpg'
 ]

 

export const homePageScript = [ 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation1,
    'url': urlLocation1,
    'openingHours': ['By Appointment Only'],
    'priceRange': '$150-$210',
    'address' : addressLoaction1,
    'telephone': contactsLocation1[contactIndex1].data,
    'image' : imageLocation1,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Affordable_Storage_Kingwood_Multisite/jpg/affordable-storage-of-kingwood-logo.jpg'
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation2,
    'image' : imageLocation2,
    'telephone': contactsLocation2[contactIndex2].data,
    'email': contactsLocation2[emailIndex2].data,
    'address': addressLoaction2,
    'openingHours': ['By Appointment Only'],
    'priceRange': '$150-$210',
    'url' : urlLocation2,
  }, ]


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
    'ratingValue': '4',
    'bestRating': '5',
    'reviewCount': '8'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.0547315,
      'longitude': -95.2333966,
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$150-$210',
    'openingHours': ['By Appointment Only'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
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
  'ratingValue': '4',
  'bestRating': '5',
  'reviewCount': '8'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 30.0547315,
      'longitude':  -95.2333966
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$150-$210',
    'openingHours': ['By Appointment Only'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'New York'
   },
   'hasMap': maplocation2,

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

