import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle,
location1PageContent, location2PageTitle,
location2PageContent, location1PageTitle,
location1PayrentPageTitle, location1PayrentPageContent,
location2PayrentPageTitle, location2PayrentPageContent,
location1ContactPageTitle, location1ContactPageContent,
location2ContactPageTitle, location2ContactPageContent,
 } from '../data/title';
import { featuresList } from '../data/home';
import { contactsLocation1, hoursLocation1, 
  contactsLocation2, hoursLocation2, 

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


const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');

  
export const nameLocation1 = `MP&E Storage - Montello`;
export const nameLocation2 = `MP&E Storage - Wautoma`;
export const nameLocation3 = `MP&E Storage - Barnwell`;
export const nameLocation4 = `MP&E Storage - Belforest`;
export const nameLocation5 = `MP&E Storage - Fairhope`;
export const nameLocation6 = `MP&E Storage - Robertsdale`;


export const location1 = `montello`;
export const location2 = `wautoma`;
export const location3 = `barnwell`;
export const location4 = `belforest`;
export const location5 = `barnwell`;
export const location6 = `robertsdale`;


export const urlLocation1 = `${environment.websiteUrl}/${environment.locationName}/montello/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/${environment.locationName}/wautoma/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/${environment.locationName}/barnwell/storage-units`;
export const urlLocation4 = `${environment.websiteUrl}/${environment.locationName}/belforest/storage-units`;
export const urlLocation5 = `${environment.websiteUrl}/${environment.locationName}/fairhope/storage-units`;
export const urlLocation6 = `${environment.websiteUrl}/${environment.locationName}/robertsdale/storage-units`;


export const description1 = `Our Montello location has a wide variety of unit sizes certain to meet any self storage needs. From our large closet sized 7-foot-by-8-foot units to our oversized 20-foot-by-24-foot, we've got you covered!`;

export const description2 = `Our Wautoma location has several unit sizes to meet your larger self storage needs. Our units start at 10-foot-by-20-foot and go up to 10-foot-by-24-foot`;

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

export const maplocation1 = 'https://goo.gl/maps/MPmzjqtH1Lhm28g97';
export const maplocation2 = 'https://goo.gl/maps/MPmzjqtH1Lhm28g97';
export const maplocation3 = 'https://goo.gl/maps/EPmskBQ9TgFTBXcb8';
export const maplocation4 = 'https://goo.gl/maps/skmJTukq9K3xRFbS7';
export const maplocation5 = 'https://goo.gl/maps/FANSU6w7QY9vCpiDA';
export const maplocation6 = 'https://goo.gl/maps/kt1bhA6aHeRmjXsN7';


export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': 'N4211 20th Ct',
      'addressLocality': 'Montello',
      'addressRegion': 'WI',
      'postalCode': '53949',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': 'N4211 20th Ct',
  'addressLocality': 'Montello',
  'addressRegion': 'WI',
  'postalCode': '53949',
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
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-self-storage-montello-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-self-storage-montello-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-self-storage-montello-43.jpg'
 ]

 export const imageLocation2 = [
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-storage-wautoma-11.jpg',
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-storage-wautoma-169.jpg',
      'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/MP_And_E/jpg/mp-and-e-storage-wautoma-43.jpg'
 ]

 export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-43.jpg'
 ]

 export const imageLocation4 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-43.jpg'
 ]

 export const imageLocation5 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-county-belforest-43.jpg'
 ]

 export const imageLocation6 =  [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-robertsdale-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-robertsdale-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Storage_Plus/mp-and-e-of-baldwin-robertsdale-43.jpg'
 ]

export const homePageScript = [ 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation1,
    'url': urlLocation1,
    'openingHours': ['Mo-Fr 08:00 - 17:00'],
    'priceRange': '$45-$125',
      'address' : addressLoaction1,
    'telephone': contactsLocation1[contactIndex1].data,
    'image' : imageLocation1,
    'logo': ''
  }, 
  {
    '@context' : 'http://schema.org',
    '@type' : ['LocalBusiness', 'SelfStorage'],
    'name' : nameLocation2,
    'image' : imageLocation2,
    'telephone': contactsLocation2[contactIndex2].data,
    'email': contactsLocation2[emailIndex2].data,
    'address': addressLoaction2,
    'openingHours': ['Mo-Fr 08:00 - 17:00'],
    'priceRange': '$45-$125',
    'url' : urlLocation2,
  }

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
    'ratingValue': '',
    'bestRating': '',
    'reviewCount': ''
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude':43.7531732,
      'longitude': -89.297297,
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$45-$125',
    'openingHours': ['Mo-Fr 08:00 - 17:00'],
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
  'ratingValue': '',
  'bestRating': '',
  'reviewCount': ''
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 44.0717536,
      'longitude': -89.2691586
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$40 - $110',
    'openingHours': [ ],
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




