import { env } from 'process';
import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle } from '../data/title';
import { HomeComponent } from '../home/home.component';

export const script = {
    // Put your script here
};

export const homePageScript = [ {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "image": [
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_1.jpg",
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_2.JPG",
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_3.JPG"
     ],
    "@id": "https://railroad-staging.netlify.app",
    "name": "railroad site ",
     "description": "Railroad Street Self Storage.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "113 Railroad St",
      "addressLocality": "Sun Prairie",
      "addressRegion": "WI",
      "postalCode": "53590",
      "addressCountry": "US"
    },
   "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "bestRating": "5",
  "reviewCount": "4"
},
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.1793090611163,
      "longitude": -89.21367618200023
    },
    "url": "https://railroad-storage.com",
    "telephone": "+(608) 228-0686",
    
    "priceRange": "$140.00",
   "openingHours":["7 Days a Week 9:00AM to 5:00PM"],
    "currenciesAccepted": "USD",
  "paymentAccepted":"Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card",
     "areaServed": {
  "@type": "State",
  "name": "Wisconsin"
   },
   
"hasMap":"https://goo.gl/maps/DF9jRXfuNANZZ9m89",
"amenityFeature":[{"@type":"LocationFeatureSpecification",
  "name":"Convenient Kimberly, WI Location"},
  {"@type":"LocationFeatureSpecification",
  "name":"Easy Online Payments"},
  {"@type":"LocationFeatureSpecification",
  "name":"Gate with Pin-code Access"},
  {"@type":"LocationFeatureSpecification",
  "name":"Well-lit Storage Units"},
  {"@type":"LocationFeatureSpecification",
  "name":"Great Customer Service"},
  {"@type":"LocationFeatureSpecification",
  "name":"Manage Account Online"},
],


    "acceptsReservations": "True"
  }];


  export const contactPageScript = [
    {
        "@context": "http://schema.org",
        "@type": "Selfstorage",
        "name": "railroad site",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Sun Prairie",
          "postalCode": "53590",
          "streetAddress": "113 Railroad St"
        },
         "url": "https://railroad-storage.com",
         "image": [
              "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_1.jpg"
             ],
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+(608) 228-0686",
          "contactType": "reservations"
        },{
          "@type": "ContactPoint",
          "telephone": "+(608) 228-0686",
          "contactType": "customer service"
        }],
        "email": "fiftyoneselfstorage@gmail.com",
        "sameAs": [
          "https://www.facebook.com/Railroad-St-Self-Storage",
          "",
          ""
        ]
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
    content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
    content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/railroad-street-self-storage.jpg`
    },
  ];

  