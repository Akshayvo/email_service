// import { env } from 'process';
// import { environment } from '../../environments/environment';
// import { homePageContent, homePageTitle, payRentPageContent,
//   payRentPageTitle, storageTipsContent, storageTipsTitle,
// contactPageContent, contactPageTitle } from '../data/title';
// import { HomeComponent } from '../home/home.component';

// export const script = {
//     // Put your script here
// };

// export const homePageScript = [ {
//     "@context": "https://schema.org",
//     "@type": "SelfStorage",
//     "image": [
//       "https://example.com/photos/1x1/photo.jpg",
//       "https://example.com/photos/4x3/photo.jpg",
//       "https://example.com/photos/16x9/photo.jpg"
//      ],
//     "@id": "http://davessteakhouse.example.com",
//     "name": "Glenmont site ",
//      "description": "A superb collection of fine gifts and clothing to accent your stay in Mexico Beach.",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "148 W 51st St",
//       "addressLocality": "New York",
//       "addressRegion": "NY",
//       "postalCode": "10019",
//       "addressCountry": "US"
//     },
//    "aggregateRating": {
//   "@type": "AggregateRating",
//   "ratingValue": "4",
//   "bestRating": "5",
//   "reviewCount": "250"
// },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": 40.761293,
//       "longitude": -73.982294
//     },
//     "url": "http://www.example.com/",
//     "telephone": "+12122459600",
    
//     "priceRange": "$$$",
//    "openingHours":["Mo-Fr 10:00-19:00", "Sa 10:00-22:00", "Su 10:00-21:00"],
//     "currenciesAccepted": "EUR",
//   "paymentAccepted":"Cash, Credit Card",
//      "areaServed": {
//   "@type": "State",
//   "name": "Massachusetts"
//    },
   
// "hasMap":"https://www.google.com/maps?ie=UTF8&hq&ll=44.264137,-88.3540592",
// "amenityFeature":[{"@type":"LocationFeatureSpecification",
//   "name":"Convenient Kimberly, WI Location"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Easy Online Payments"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Gate with Pin-code Access"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Well-lit Storage Units"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Great Customer Service"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Manage Account Online"},
//   {"@type":"LocationFeatureSpecification",
//   "name":"Climate Controlled Storage"}],


//     "acceptsReservations": "True"
//   }];


//   export const contactPageScript = [
//     {
//         "@context": "http://schema.org",
//         "@type": "Selfstorage",
//         "name": "Marca",
//         "address": {
//           "@type": "PostalAddress",
//           "addressLocality": "Bangalore, Karnataka",
//           "postalCode": "560094",
//           "streetAddress": "1st floor, SLN Emeralds Building, Dr Rajgopal Rd, Krishnappa Layout, AECS Layout, R.M.V. 2nd Stage,"
//         },
//          "url": "dfd.com/ff",
//          "image": [
//               "https://example.com/photos/1x1/photo.jpg"
//              ],
//         "contactPoint": [{
//           "@type": "ContactPoint",
//           "telephone": "",
//           "contactType": "reservations"
//         },{
//           "@type": "ContactPoint",
//           "telephone": "4",
//           "contactType": "customer service"
//         }],
//         "email": "info@glenmontselfstorage.com",
//         "sameAs": [
//           "facebook.com/xxx",
//           "",
//           ""
//         ]
//       }
//   ];


// export const ogHomePage = [
//   {
//     property: `og:description`,
//     content: `${homePageContent}`
//   },
//   {
//     property: `og:type`,
//     content: `website`
//   },
//   {
//     property: `og:title`,
//     content: `${homePageTitle}`
//   },
//   {
//     property: `og:site_name`,
//     content: `${environment.facilityName}`
//   },
//   {
//     property: `og:url`,
//     content: `${environment.websiteUrl}`
//   },
//   {
//     property: `og:image`,
//     content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//   },
// ];

// export const twitterHomePage = [
//   {
//     name: `twitter:site`,
//     content: `@${environment.facilityName}`
//   },
//   {
//     name: `twitter:card`,
//     content: `summary`
//   },
//   {
//     name: `twitter:creator`,
//     content: `@syrasoft_connect`
//   },
//   {
//     name: `twitter:title`,
//     content: `@${homePageTitle}`
//   },
//   {
//     name: `twitter:description`,
//     content: `${homePageContent}`
//   },
//   {
//     name: `twitter:image`,
//     content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//   },
// ];

// export const ogPayRentPage = [
//     {
//       property: `og:title`,
//       content: `${payRentPageTitle}`
//     },
//     {
//       property: `og:description`,
//       content: `${payRentPageContent}`
//     },
//     {
//       property: `og:type`,
//       content: `website`
//     },
//     {
//       property: `og:site_name`,
//       content: `${environment.facilityName}`
//     },
//     {
//       property: `og:url`,
//       content: `${environment.websiteUrl}/pay-rent/rent-sub/login`
//     },
//     {
//       property: `og:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];
  
//   export const twitterPayRentPage = [
//     {
//       name: `twitter:title`,
//       content: `@${payRentPageTitle}`
//     },
//     {
//       name: `twitter:description`,
//       content: `${payRentPageContent}`
//     },
//     {
//       name: `twitter:site`,
//       content: `@${environment.facilityName}`
//     },
//     {
//       name: `twitter:card`,
//       content: `summary`
//     },
//     {
//       name: `twitter:creator`,
//       content: `@syrasoft_connect`
//     },
//     {
//       name: `twitter:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];

//   export const ogStorageTipsPage = [
//     {
//       property: `og:title`,
//       content: `${storageTipsTitle}`
//     },
//     {
//       property: `og:description`,
//       content: `${storageTipsContent}`
//     },
//     {
//       property: `og:type`,
//       content: `website`
//     },
//     {
//       property: `og:site_name`,
//       content: `${environment.facilityName}`
//     },
//     {
//       property: `og:url`,
//       content: `${environment.websiteUrl}/storage-tips`
//     },
//     {
//       property: `og:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];
  
//   export const twitterStorageTipsPage = [
//     {
//       name: `twitter:title`,
//       content: `@${storageTipsTitle}`
//     },
//     {
//       name: `twitter:description`,
//       content: `${storageTipsContent}`
//     },
//     {
//       name: `twitter:site`,
//       content: `@${environment.facilityName}`
//     },
//     {
//       name: `twitter:card`,
//       content: `summary`
//     },
//     {
//       name: `twitter:creator`,
//       content: `@syrasoft_connect`
//     },
//     {
//       name: `twitter:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];
  
//   export const ogContactPage = [
//     {
//       property: `og:title`,
//       content: `${contactPageTitle}`
//     },
//     {
//       property: `og:description`,
//       content: `${contactPageContent}`
//     },
//     {
//       property: `og:type`,
//       content: `website`
//     },
//     {
//       property: `og:site_name`,
//       content: `${environment.facilityName}`
//     },
//     {
//       property: `og:url`,
//       content: `${environment.websiteUrl}/contact-us`
//     },
//     {
//       property: `og:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];
  
//   export const twitterContactPage = [
//     {
//       name: `twitter:title`,
//       content: `@${contactPageTitle}`
//     },
//     {
//       name: `twitter:description`,
//       content: `${contactPageContent}`
//     },
//     {
//       name: `twitter:site`,
//       content: `@${environment.facilityName}`
//     },
//     {
//       name: `twitter:card`,
//       content: `summary`
//     },
//     {
//       name: `twitter:creator`,
//       content: `@syrasoft_connect`
//     },
//     {
//       name: `twitter:image`,
//       content: `https://syrasoft-tenant-facing-websites.s3.us-eust-1.as-east-1.amazGs.nmontconmont_Storagpgnmont/glenmont-selage-jumbotron.jpg`
//     },
//   ];





import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle } from '../data/title';
import { featuresList } from '../data/home';
import { contact, hours, socialLinks } from '../data/contact';
import { FetchDataService } from '../api-bundle/services/fetch-data.service';


//  let foo = new FetchDataService();
//  foo.getData().subscribe(unitTypesResponse => {
//    console.log('unitTypesResponse', unitTypesResponse);
// });
 
const contactIndex = contact.findIndex(x => x.label === 'Phone:');
const emailIndex = contact.findIndex(x => x.label === 'Email:');
const sameAs = [];
const openingHours = [];
const amenityFeature = [];
hours.forEach(hour =>
  openingHours.push(hour.label + hour.data)
)

featuresList.forEach(
  feature => 
  (amenityFeature.push({ "@type": "LocationFeatureSpecification",  "name": feature.td1}),
  amenityFeature.push({ "@type": "LocationFeatureSpecification",  "name": feature.td2}))
)

socialLinks.forEach(links => 
  sameAs.push(links.path)
)
  

export const script = {               // Please fill this script according to facility's information
    imagesHomePage: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
     imagesContactPage: [
      "https://example.com/photos/1x1/photo.jpg",
     ],
     telephone: contact[contactIndex].data,
     map: "https://www.google.com/maps?ie=UTF8&hq&ll=44.264137,-88.3540592",
     description: "Glenmont Self Storage serves Glenmont and the surrounding communities with a variety of well-maintained and affordable self storage units." || homePageContent,
     streetAddress: "560 Rte 9W",
     state: "New York",
     addressLocality: "New York",
     addressRegion: "NY",
     postalCode: "12077",
     addressCountry: "US",
     id: environment.websiteUrl || "",
     paymentAccepted:  "",
     currenciesAccepted: "EUR",
     ratingValue: "4",
     bestRating: "5",
     reviewCount: "250",
     latitude: 40.761293,
     longitude: -73.982294,
};

export const homePageScript = [ {
    "@context": "https://schema.org",
    "@type": ["Organization","SelfStorage","Place","LocalBusiness"],
    "image": script.imagesHomePage,
    "@id": script.id,
    "name": environment.facilityName,
     "description": script.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": script.streetAddress,
      "addressLocality": script.addressLocality,
      "addressRegion": script.addressRegion,
      "postalCode": script.postalCode,
      "addressCountry": script.addressCountry
    },
   "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": script.ratingValue,
      "bestRating": script.bestRating,
      "reviewCount": script.reviewCount
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": script.latitude,
      "longitude": script.longitude
    },
    "url": environment.websiteUrl,
    "telephone": script.telephone,
    
    "priceRange": "$$$",
    "openingHours": openingHours,
    "currenciesAccepted": script.currenciesAccepted,
    "paymentAccepted": script.paymentAccepted,
     "areaServed": {
    "@type": "State",
    "name": script.state
   },
   
  "hasMap": script.map,
  "amenityFeature": amenityFeature,
  "acceptsReservations": "True"
  }];


  export const contactPageScript = [
    {
        "@context": "http://schema.org",
        "@type": "Selfstorage",
        "name": environment.facilityName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": script.addressLocality,
          "postalCode": script.postalCode,
          "streetAddress": script.streetAddress,
        },
         "url": environment.websiteUrl,
         "image": script.imagesContactPage,
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": script.telephone,
          "contactType": "reservations"
        },{
          "@type": "ContactPoint",
          "telephone": script.telephone,
          "contactType": "customer service"
        }],
        "email": contact[emailIndex].data,
        "sameAs": sameAs
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
    content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
    content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `${environment.websiteUrl}/storage-tips`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Glenmont_Storage/jpg/glenmont-self-storage-jumbotron.jpg`
    },
  ];

  