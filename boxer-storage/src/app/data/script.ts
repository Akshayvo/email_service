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
location8ContactPageTitle, location8ContactPageContent, } from '../data/title';
import { featuresList } from '../data/home';
import { contactsLocation1, hoursLocation1, 
  contactsLocation2, hoursLocation2, 
  contactsLocation3, hoursLocation3, 
  contactsLocation4, hoursLocation4,
  contactsLocation5, hoursLocation5,
  contactsLocation6, hoursLocation6,
  contactsLocation7, hoursLocation7,
  contactsLocation8, hoursLocation8,

 } from '../data/contact';

 
const contactIndex1 = contactsLocation1.findIndex(x => x.label === 'Phone: ');
const contactIndex2 = contactsLocation2.findIndex(x => x.label === 'Phone: ');
const contactIndex3 = contactsLocation3.findIndex(x => x.label === 'Phone: ');
const contactIndex4 = contactsLocation4.findIndex(x => x.label === 'Phone: ');
const contactIndex5 = contactsLocation5.findIndex(x => x.label === 'Phone: ');
const contactIndex6 = contactsLocation6.findIndex(x => x.label === 'Phone: ');
const contactIndex7 = contactsLocation6.findIndex(x => x.label === 'Phone: ');
const contactIndex8 = contactsLocation6.findIndex(x => x.label === 'Phone: ');

const emailIndex1 = contactsLocation1.findIndex(x => x.label === 'Email: ');
const emailIndex2 = contactsLocation2.findIndex(x => x.label === 'Email: ');
const emailIndex3 = contactsLocation3.findIndex(x => x.label === 'Email: ');
const emailIndex4 = contactsLocation4.findIndex(x => x.label === 'Email: ');
const emailIndex5 = contactsLocation5.findIndex(x => x.label === 'Email: ');
const emailIndex6 = contactsLocation6.findIndex(x => x.label === 'Email: ');
const emailIndex7 = contactsLocation6.findIndex(x => x.label === 'Email: ');
const emailIndex8 = contactsLocation6.findIndex(x => x.label === 'Email: ');
  
export const nameLocation1 = `Boxer Storage - Evanston Ave  Location`;
export const nameLocation2 = `Boxer Storage - Howard City Location`;
export const nameLocation3 = `Boxer Storage - Ionia Location`;
export const nameLocation4 = `Boxer Storage - Alpine Location`;
export const nameLocation5 = `Boxer Storage - Red Barn Location`;
export const nameLocation6 = `Boxer Storage - Wayland Westside Location`;
export const nameLocation7 = `Boxer Storage - Wayland Mill Street Location`;
export const nameLocation8 = `Boxer Storage - Wayland Southside Location`;


export const location1 = `evanston-ave`;
export const location2 = `howard-city`;
export const location3 = `ionia`;
export const location4 = `alpine`;
export const location5 = `Red Barn`;
export const location6 = `Wayland Westside`;
export const location7 = `Wayland Mill`;
export const location8 = `Wayland Southside`;


export const urlLocation1 = `${environment.websiteUrl}/${environment.locationName}/evanston-ave/storage-units`;
export const urlLocation2 = `${environment.websiteUrl}/${environment.locationName}/howard-city/storage-units`;
export const urlLocation3 = `${environment.websiteUrl}/${environment.locationName}/ionia/storage-units`;
export const urlLocation4 = `${environment.websiteUrl}/${environment.locationName}/alpine/storage-units`;
export const urlLocation5 = `${environment.websiteUrl}/${environment.locationName}/red-barn/storage-units`;
export const urlLocation6 = `${environment.websiteUrl}/${environment.locationName}/wayland-westside/storage-units`;
export const urlLocation7 = `${environment.websiteUrl}/${environment.locationName}/wayland-mill/storage-units`;
export const urlLocation8 = `${environment.websiteUrl}/${environment.locationName}/Wayland Southside/storage-units`;

// export const urlLocation3 = ``;
// export const urlLocation4 = ``;
// export const urlLocation5 = ``;
// export const urlLocation6 = ``;


export const description1 = `Boxer Storage - Evanston Location is one of our 12 conveniently located self storage
facilities. We offer a number of self storage unit with friendly customer service at very affordable rates!`;

export const description2 = `Boxer Storage - Howard City Location is one of our 12 conveniently located self storage facilities. We offer a number of self storage unit with friendly customer service at very affordable rates!`;

export const description3 = `Boxer Storage - Ionia Location is one of our 12 conveniently located storage facilities. We offer a number of self storage unit with excellent customer service.`;

export const description4 = `Boxer Storage - Alpine Location is one of our 12 conveniently located self storage facilities. We offer a number of self storage unit with friendly customer service at very affordable rates!`;

export const description5 = `Boxer Storage - Red Barn Location is one of our 12 convenient and affordable storage facilities. We offer a variety of self storage unit sizes with friendly customer service at very affordable rates!`;

export const description6 = `Boxer Storage - Wayland Westside Location is one of our 12 convenient self storage facilities. We have a variety of storage unit sizes with friendly customer service at very affordable rates!`;

export const description7 = `Boxer Storage - Wayland Mill Street Location is one of our 12 self storage facilities. We offer a number of self storage unit options with friendly customer service at affordable rates!`;

export const description8 = `Boxer Storage - Wayland Wayland Southside Location is one of our 12 self storage facilities. We offer a number of self storage unit choices with friendly customer service and affordable rates!`;

// export const description6 = `Our Robertsdale location has a number of unit sizes ideal for just about any self
//                              storage need at great prices!  Our 24-hour access policy makes coming and going
//                              on your schedule a breeze!`;

export const maplocation1 = 'https://goo.gl/maps/Aey9AuYbspcu5HgC9';
export const maplocation2 = `https://goo.gl/maps/V9mQLpHMRbH1CtK4A`;
export const maplocation3 = `https://goo.gl/maps/SLhfo6WxuVcRxioU8`;
export const maplocation4 = `https://goo.gl/maps/B8hbVLs5uHNGABTH6`;
export const maplocation5 = `https://goo.gl/maps/SBoZK63EiLTDFhAh7`;
export const maplocation6 = ``;
export const maplocation7 = `https://goo.gl/maps/ttXsLp3h7y8XrzMf8`;
export const maplocation8 = `https://goo.gl/maps/MwuW3UGVG1S9AeFn9`;

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
  'addressLocality': 'Ionia',
  'addressRegion': 'MI',
  'postalCode': '48846',
  'addressCountry': 'United state'
}


export const addressLoaction4 = {
  '@type': 'PostalAddress',
  'streetAddress': '6659 Alpine Ave NW',
  'addressLocality': 'Comstock Park',
  'addressRegion': 'MI',
  'postalCode': '49321',
  'addressCountry': 'United state'
}


export const addressLoaction5 = {
  '@type': 'PostalAddress',
  'streetAddress': '10209 Mason Dr',
  'addressLocality': 'Grant',
  'addressRegion': 'MI',
  'postalCode': '49327',
  'addressCountry': 'United state'
}

export const addressLoaction6 = {
  '@type': 'PostalAddress',
  'streetAddress': '3591 12th St',
  'addressLocality': 'Wayland',
  'addressRegion': 'MI',
  'postalCode': '49348',
  'addressCountry': 'United state'
}

export const addressLoaction7 = {
  '@type': 'PostalAddress',
  'streetAddress': '410 Mill St',
  'addressLocality': 'Wayland',
  'addressRegion': 'MI',
  'postalCode': '49348',
  'addressCountry': 'United state'
}

export const addressLoaction8 = {
  '@type': 'PostalAddress',
  'streetAddress': '1050 133rd Ave',
  'addressLocality': 'Wayland',
  'addressRegion': 'MI',
  'postalCode': '49348',
  'addressCountry': 'United state'
}



export const imageLocation1 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-evanston-ave-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-evanston-ave-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-evanston-ave-43.jpg'
 ]

 export const imageLocation2 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-howard-city-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-howard-city-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-howard-city-43.jpg'
 ]

 export const imageLocation3 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-self-storage-ionia-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-self-storage-ionia-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-self-storage-ionia-43.jpg'
 ]


 export const imageLocation4 = [
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-alpine-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-alpine-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/boxer-storage-alpine-43.jpg'
 ]

 export const imageLocation5 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-red-barn-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-red-barn-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-red-barn-43.jpg'
 ]

 export const imageLocation6 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-westside-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-westside-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-westside-43.jpg'
 ]

 export const imageLocation7 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-mill-street-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-mill-street-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-mill-street-43.jpg'
 ]

 export const imageLocation8 = [
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-southside-11.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-southside-169.jpg',
  'https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Boxer_Storage/boxer-storage-wayland-southside-43.jpg'
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
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/jpg/boxer-storage-logo.jpg'
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
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/jpg/boxer-storage-logo.jpg'
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
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/jpg/boxer-storage-logo.jpg'
  }, 
    {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'SelfStorage', 'Place', 'LocalBusiness'],
    'name': nameLocation4,
    'url': urlLocation4,
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'priceRange': '$30 - $80',
    'address' : addressLoaction4,
    'telephone': contactsLocation4[contactIndex4].data,
    'image' : imageLocation4,
    'logo': 'https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Boxer_Storage/jpg/boxer-storage-logo.jpg'
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
    'ratingValue': '2.5',
    'bestRating': '5',
    'reviewCount': '10'
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 43.213444,
      'longitude': -86.139441,
    },
    'url': urlLocation1,
    'telephone': contactsLocation1[contactIndex1].data,

    'priceRange': '$40 - $130',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Michigan'
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
      'latitude': 43.3783538,
      'longitude': -85.4730562,
    },
    'url': urlLocation2,
    'telephone': contactsLocation2[contactIndex2].data,

    'priceRange': '$30 - $110',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Michigan'
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
      'latitude': 42.9281179,
      'longitude': -85.0751504,
    },
    'url': urlLocation3,
    'telephone': contactsLocation3[contactIndex3].data,

    'priceRange': '$200 - $350',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Michigan'
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
    'ratingValue': '',
    'bestRating': '',
    'reviewCount': ''
  },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 43.0839938,
      'longitude': -85.6915751,
    },
    'url': urlLocation4,
    'telephone': contactsLocation4[contactIndex4].data,

    'priceRange': '$30 - $80',
    'openingHours': ['Mo-Fr 08:00 - 18:00', 'Sa 08:00 - 14:00'],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Michigan'
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
  'ratingValue': '3.6',
  'bestRating': '5',
  'reviewCount': '11'
},
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 43.3689982,
      'longitude': -85.8011198
    },
    'url': urlLocation5,
    'telephone': contactsLocation5[contactIndex5].data,

    'priceRange': '$35-$110',
    'openingHours': [],
    'currenciesAccepted': 'USD',
  'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
     'areaServed': {
  '@type': 'State',
  'name': 'Michigan'
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
'ratingValue': '4',
'bestRating': '5',
'reviewCount': '9'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 42.6809757,
    'longitude': -85.664077
  },
  'url': urlLocation6,
  'telephone': contactsLocation6[contactIndex6].data,

  'priceRange': '$35-$110',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'Michigan'
 },
 'hasMap': maplocation6,

  'acceptsReservations': 'True'

};

export const Location7Script = {
  '@context': 'https://schema.org',
  '@type': 'SelfStorage',
  'image': imageLocation7,
  '@id': environment.websiteUrl,
  'name': nameLocation6,
   'description': description7 || location7PageContent,
  'address': addressLoaction7,
 'aggregateRating': {
'@type': 'AggregateRating',
'ratingValue': '3.5',
'bestRating': '5',
'reviewCount': '15'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 42.6781204,
    'longitude': -85.6543239
  },
  'url': urlLocation7,
  'telephone': contactsLocation7[contactIndex7].data,

  'priceRange': '$35-$90',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'Michigan'
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
'ratingValue': '2.9',
'bestRating': '5',
'reviewCount': '9'
},
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 42.6624686,
    'longitude': -85.6443378
  },
  'url': urlLocation8,
  'telephone': contactsLocation8[contactIndex8].data,

  'priceRange': '$35-$110',
  'openingHours': [],
  'currenciesAccepted': 'USD',
'paymentAccepted': 'Cash, Check, Credit Card, Debit Card',
   'areaServed': {
'@type': 'State',
'name': 'Michigan'
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


export const contactPageLocation4Script = {
    '@context': 'http://schema.org',
    '@type': 'Selfstorage',
    'name': nameLocation4,
    'address': addressLoaction4,
     'url': urlLocation4,
     'image':  imageLocation4,
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone':  contactsLocation4[contactIndex4].data,
      'contactType': 'reservations'
    }, {
      '@type': 'ContactPoint',
      'telephone':  contactsLocation4[contactIndex4].data,
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
    content: imageLocation7[1]
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
    content: imageLocation8[1]
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

export const ogPayRentPageLocation7 = [
  {
    property: `og:title`,
    content: location7PayrentPageTitle
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
    content: imageLocation7[1]
  },
];

export const ogPayRentPageLocation8 = [
  {
    property: `og:title`,
    content: location8PayrentPageTitle
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
    content: imageLocation8[1]
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
    content: `${environment.websiteUrl}/contact-${location3}`
  },
  {
    property: `og:image`,
    content: imageLocation4[1]
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
    content: imageLocation5[1]
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
    content: imageLocation6[1]
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
    content: imageLocation7[1]
  },
];

export const ogContactPageLocation8 = [
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
    content: imageLocation8[1]
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

export const twitterContactPageLocation4 = [
  {
    name: `twitter:title`,
    content: `@${location3ContactPageTitle}`
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


