import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle } from '../data/title';
import { featuresList } from '../data/home';
import { contact, socialLinks } from '../data/contact';
 
const contactIndex = contact.findIndex(x => x.label === 'Phone:');
const emailIndex = contact.findIndex(x => x.label === 'Email:');
const sameAs = [];
const amenityFeature = [];


featuresList.forEach(
  feature => 
  (amenityFeature.push({ '@type': 'LocationFeatureSpecification',  'name': feature.td1}),
  amenityFeature.push({ '@type': 'LocationFeatureSpecification',  'name': feature.td2}))
)

socialLinks.forEach(links => {
  links.path ? sameAs.push(links.path) : sameAs.push(' ')
}
);
  

export const script = {               // Please fill this script according to facility's information
    imagesHomePage: [
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Bay_Mini/jpg/south-bay-mini-storage-11.jpg', // 1:1
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Bay_Mini/jpg/south-bay-mini-storage-34.jpg', // 4:3
      'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/South_Bay_Mini/jpg/south-bay-mini-storage-169.jpg' // 16:9
     ],
     telephone: contact[contactIndex].data,
     map: 'https://goo.gl/maps/GLJVBAFcdMkvoBdL9',
     description: 'South Bay Mini-Storage is Eureka’s one stop self storage solution. We are conveniently located just off the 101 south of Eureka on Humboldt Hill. As a locally owned and operated self storage facility, we go the extra mile every day to bring our customers the highest level of customer service at very competitive rates. We are proud to serve both residential and commercial storage unit users in Eureka, Rosewood, Myrtletown, and the surrounding communities. ',
     streetAddress: '',
     state: '',
     addressLocality: '',
     addressRegion: '',
     postalCode: '',
     addressCountry: 'US',
     id: environment.websiteUrl || '',
     paymentAccepted:  'Cash, Check, Credit Card, Debit Card',
     currenciesAccepted: 'USD',
     ratingValue: '4',
     bestRating: '5',
     reviewCount: '30',
     latitude: 40.7396498,
     longitude: -124.2007307,
     openingHours: [],
     priceRange: '$50-$180'
};

export const homePageScript = [ {
    '@context': 'https://schema.org',
    '@type': ['Organization','SelfStorage','Place','LocalBusiness'],
    'image': script.imagesHomePage,
    '@id': script.id,
    'name': environment.facilityName,
     'description': script.description || homePageContent,
    // 'address': {
    //   '@type': 'PostalAddress',
    //   'streetAddress': script.streetAddress,
    //   'addressLocality': script.addressLocality,
    //   'addressRegion': script.addressRegion,
    //   'postalCode': script.postalCode,
    //   'addressCountry': script.addressCountry
    // },
   'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': script.ratingValue,
      'bestRating': script.bestRating,
      'reviewCount': script.reviewCount
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': script.latitude,
      'longitude': script.longitude
    },
    'url': environment.websiteUrl,
    'telephone': script.telephone,
    
    'priceRange': script.priceRange,
    'openingHours': script.openingHours,
    'currenciesAccepted': script.currenciesAccepted,
    'paymentAccepted': script.paymentAccepted,
     'areaServed': {
    '@type': 'State',
    'name': script.state
   },
   
  'hasMap': script.map,
  'amenityFeature': amenityFeature,
  'acceptsReservations': 'True'
  }];


  export const contactPageScript = [
    {
        '@context': 'http://schema.org',
        '@type': 'Selfstorage',
        'name': environment.facilityName,
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': script.addressLocality,
          'postalCode': script.postalCode,
          'streetAddress': script.streetAddress,
        },
         'url': `${environment.websiteUrl}/contact-us`,
         'image': script.imagesHomePage[0],
        'contactPoint': [{
          '@type': 'ContactPoint',
          'telephone': script.telephone,
          'contactType': 'reservations'
        },{
          '@type': 'ContactPoint',
          'telephone': script.telephone,
          'contactType': 'customer service'
        }],
        'email': contact[emailIndex].data,
        'sameAs': sameAs
      }
  ];


export const ogHomePage = [
  {
    property: `og:description`,
    content: `${homePageContent}`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: `${homePageTitle}`
  },
  {
    property: `og:site_name`,
    content: `${environment.facilityName}`
  },
  {
    property: `og:url`,
    content: `${environment.websiteUrl}`
  },
  {
    property: `og:image`,
    content: script.imagesHomePage[1]
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
    content: `${homePageContent}`
  },
  {
    name: `twitter:image`,
    content: script.imagesHomePage[0]
  },
];

export const ogPayRentPage = [
    {
      property: `og:title`,
      content: `${payRentPageTitle}`
    },
    {
      property: `og:description`,
      content: `${payRentPageContent}`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `${environment.facilityName}`
    },
    {
      property: `og:url`,
      content: `${environment.websiteUrl}/pay-rent/rent-sub/login`
    },
    {
      property: `og:image`,
      content: script.imagesHomePage[1]
    },
  ];
  
  export const twitterPayRentPage = [
    {
      name: `twitter:title`,
      content: `@${payRentPageTitle}`
    },
    {
      name: `twitter:description`,
      content: `${payRentPageContent}`
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
      content: script.imagesHomePage[0]
    },
  ];

  export const ogStorageTipsPage = [
    {
      property: `og:title`,
      content: `${storageTipsTitle}`
    },
    {
      property: `og:description`,
      content: `${storageTipsContent}`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `${environment.facilityName}`
    },
    {
      property: `og:url`,
      content: `${environment.websiteUrl}/${environment.locationName}/storage-tips`
    },
    {
      property: `og:image`,
      content: script.imagesHomePage[1]
    },
  ];
  
  export const twitterStorageTipsPage = [
    {
      name: `twitter:title`,
      content: `@${storageTipsTitle}`
    },
    {
      name: `twitter:description`,
      content: `${storageTipsContent}`
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
      content: script.imagesHomePage[0]
    },
  ];
  
  export const ogContactPage = [
    {
      property: `og:title`,
      content: `${contactPageTitle}`
    },
    {
      property: `og:description`,
      content: `${contactPageContent}`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `${environment.facilityName}`
    },
    {
      property: `og:url`,
      content: `${environment.websiteUrl}/contact-us`
    },
    {
      property: `og:image`,
      content: script.imagesHomePage[1]
    },
  ];
  
  export const twitterContactPage = [
    {
      name: `twitter:title`,
      content: `@${contactPageTitle}`
    },
    {
      name: `twitter:description`,
      content: `${contactPageContent}`
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
      content: script.imagesHomePage[0]
    },
  ];

  