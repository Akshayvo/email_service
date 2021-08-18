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
location3ContactPageTitle, location3ContactPageContent,
faqPageTitle, faqPageContent } from '../data/title';
import { featuresList } from '../data/home';
import { contactsLocation1, hoursLocation1, 
  contactsLocation2, hoursLocation2, 
  contactsLocation3, hoursLocation3,   

 } from '../data/contact';

 
const contactIndex1 = contactsLocation1.findIndex(x => x.label === 'Phone: ');
const contactIndex2 = contactsLocation2.findIndex(x => x.label === 'Phone: ');
const contactIndex3 = contactsLocation3.findIndex(x => x.label === 'Phone: ');

const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');
  
export const nameLocation1 = `Rebel Storage Location`;
export const nameLocation2 = `Secure Storage Location`;
export const nameLocation3 = `Greenwood Mini-Storage Location`;



export const location1 = `rebel-mini`;
export const location2 = `secure-storage`;
export const location3 = `green-wood`;


export const urlLocation1 = `${environment.websiteUrl}/${environment.locationName}/rebel-mini/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/${environment.locationName}/secure-storage/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/${environment.locationName}/green-wood/storage-units`;


export const description1 = `Our Rebel Mini Storage location offers a variety of storage unit sizes for residential and commercial storage users.`;

export const description2 = `Our Secure Storage location offers a variety of storage unit sizes for residential and commercial storage users. in Greenwood, Ms. Check out our rates, then rent your unit online in minutes!`;

export const description3 = `Our Greenwood Mini-Storage location offers a variety of storage unit sizes for residential and commercial storage users. in Greenwood, MS.`;

export const maplocation1 = 'https://goo.gl/maps/gM4fTfxJyCoPAjzx9';
export const maplocation2 = `https://goo.gl/maps/V9mQLpHMRbH1CtK4A`;
export const maplocation3 = `https://goo.gl/maps/SLhfo6WxuVcRxioU8`;

export const addressLoaction1 = {
  '@type': 'PostalAddress',
      'streetAddress': '4300 Evanston Ave',
      'addressLocality': 'Muskegon',
      'addressRegion': 'MI',
      'postalCode': '49442',
      'addressCountry': 'United state'
};

export const addressLoaction2 = {
  '@type': 'PostalAddress',
  'streetAddress': '5607 Henkel Rd',
  'addressLocality': 'Howard City',
  'addressRegion': 'MI',
  'postalCode': '49329',
  'addressCountry': 'United state'
}

export const addressLoaction3 = {
  '@type': 'PostalAddress',
  'streetAddress': '4062 S State Rd',
  'addressLocality': 'green-wood',
  'addressRegion': 'MI',
  'postalCode': '48846',
  'addressCountry': 'United state'
}


export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-43.jpg'
 ]
export const imageLocation2 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-43.jpg'
 ]
export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/greenwood-mini-storage-43.jpg'
 ]

export const homePageScript = [ 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation1,
    'url': urlLocation1,
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'priceRange': '$40 - $130',
      'address' : addressLoaction1,
    'telephone': contactsLocation1[contactIndex1].data,
    'image' : imageLocation1,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/boxer-storage-logo.jpg'
  }, 
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation2,
    'url': urlLocation2,
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'priceRange': '$30 - $110',
    'address' : addressLoaction2,
    'telephone': contactsLocation2[contactIndex2].data,
    'image' : imageLocation2,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/boxer-storage-logo.jpg'
  }, 
    {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation3,
    'url': urlLocation3,
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'priceRange': '$350 - $200',
    'address' : addressLoaction3,
    'telephone': contactsLocation3[contactIndex3].data,
    'image' : imageLocation3,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Greenwood_Mini/jpg/boxer-storage-logo.jpg'
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
    'ratingValue': '4.3',
    'bestRating': '5',
    'reviewCount': '7'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 33.5297476,
      'longitude': -90.2102095,
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$36 - $87',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Mississippi'
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
    'ratingValue': '2.0',
    'bestRating': '5',
    'reviewCount': '3'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 33.5128718,
      'longitude': -90.2063396,
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$22 - $242',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Mississippi'
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
    'ratingValue': '2.6',
    'bestRating': '5',
    'reviewCount': '9'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 33.5280771,
      'longitude': -90.2130024,
    },
    'url': urlLocation3,
    'telephone': contactsLocation3[contactIndex3].data,

    'priceRange': '$22 - $500',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Mississippi'
   },
   'hasMap': maplocation3,

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
     'image':  imageLocation2,
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
     'image':  imageLocation3,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone':  contactsLocation3[contactIndex3].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone':  contactsLocation3[contactIndex3].data,
      'contactType': 'customer service'
    }],
    'email': contactsLocation3[emailIndex3].data,
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
    content: imageLocation2[1]
  },
];
export const ogPayRentPageLocation3 = [
  {
    property: `og:title`,
    content: location3PayrentPageTitle
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

export const ogFaqPage = [
  {
    property: `og:title`,
    content: faqPageTitle
  },
  {
    property: `og:description`,
    content: faqPageContent
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
    content: `${environment.websiteUrl}/frequently-asked-questions`
  },
  {
    property: `og:image`,
    content: imageLocation1[1]
  },
];


export const twitterFaqPage = [
  {
    name: `twitter:title`,
    content: `@${faqPageTitle}`
  },
  {
    name: `twitter:description`,
    content: faqPageContent
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

export const ogContactPageLocation2 = [
  {
    property: `og:title`,
    content: location2ContactPageTitle
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
export const ogContactPageLocation3 = [
  {
    property: `og:title`,
    content: location3ContactPageTitle
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
    content: imageLocation2[0]
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


