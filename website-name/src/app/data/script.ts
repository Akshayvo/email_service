export const script = {
    // Put your script here
};

export const homePageScript = [ {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "image": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "@id": "http://davessteakhouse.example.com",
    "name": "Sample site ",
     "description": "A superb collection of fine gifts and clothing to accent your stay in Mexico Beach.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "148 W 51st St",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10019",
      "addressCountry": "US"
    },
   "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4",
  "bestRating": "5",
  "reviewCount": "250"
},
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.761293,
      "longitude": -73.982294
    },
    "url": "http://www.example.com/",
    "telephone": "+12122459600",
    
    "priceRange": "$$$",
   "openingHours":["Mo-Fr 10:00-19:00", "Sa 10:00-22:00", "Su 10:00-21:00"],
    "currenciesAccepted": "EUR",
  "paymentAccepted":"Cash, Credit Card",
     "areaServed": {
  "@type": "State",
  "name": "Massachusetts"
   },
   
"hasMap":"https://www.google.com/maps?ie=UTF8&hq&ll=44.264137,-88.3540592",
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
  {"@type":"LocationFeatureSpecification",
  "name":"Climate Controlled Storage"}],


    "acceptsReservations": "True"
  }];


  export const contactPageScript = [
    {
        "@context": "http://schema.org",
        "@type": "Selfstorage",
        "name": "Marca",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bangalore, Karnataka",
          "postalCode": "560094",
          "streetAddress": "1st floor, SLN Emeralds Building, Dr Rajgopal Rd, Krishnappa Layout, AECS Layout, R.M.V. 2nd Stage,"
        },
         "url": "dfd.com/ff",
         "image": [
              "https://example.com/photos/1x1/photo.jpg"
             ],
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "",
          "contactType": "reservations"
        },{
          "@type": "ContactPoint",
          "telephone": "4",
          "contactType": "customer service"
        }],
        "email": "contact@sample.com",
        "sameAs": [
          "facebook.com/xxx",
          "",
          ""
        ]
      }
  ];


export const ogHomePage = [
  {
    property: `og:description`,
    content: `Our regular and climate controlled self storage units are clean, well-lit, accessible 24 hours a day, and affordable! Reserve today!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: `Affordable Self Storage Units in Baldwinsville, New York, 13027`
  },
  {
    property: `og:site_name`,
    content: `Sample Self Storage - North`
  },
  {
    property: `og:url`,
    content: `https://sample-self-storage-staging.netlify.app/`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
  },
];

export const twitterHomePage = [
  {
    name: `twitter:site`,
    content: `@Sample Self Storage - North`
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
    content: `@Affordable Self Storage Units in Baldwinsville, New York, 13027`
  },
  {
    name: `twitter:description`,
    content: `Our regular and climate controlled self storage units are clean, well-lit, accessible 24 hours a day, and affordable! Reserve today!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
  },
];

export const ogPayRentPage = [
    {
      property: `og:title`,
      content: `Pay Rent  | Sample Self Storage - North`
    },
    {
      property: `og:description`,
      content: `Simply follow the on-page instructions, or call one of our friendly management professionals to learn how to access your account, today!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Sample Self Storage - North`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/pay-rent/rent-sub/login`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];
  
  export const twitterPayRentPage = [
    {
      name: `twitter:title`,
      content: `@Pay Rent  | Sample Self Storage - North`
    },
    {
      name: `twitter:description`,
      content: `Simply follow the on-page instructions, or call one of our friendly management professionals to learn how to access your account, today!`
    },
    {
      name: `twitter:site`,
      content: `@Sample Self Storage - North`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];

  export const ogStorageTipsPage = [
    {
      property: `og:title`,
      content: `Storage Tips  | Sample Self Storage - North`
    },
    {
      property: `og:description`,
      content: `Use our helpful self storage tips list to make your stay at Sample Self Storage - North an easy and enjoyable one!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Sample Self Storage - North`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/storage-tips`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];
  
  export const twitterStorageTipsPage = [
    {
      name: `twitter:title`,
      content: `@Storage Tips  | Sample Self Storage - North`
    },
    {
      name: `twitter:description`,
      content: `Use our helpful self storage tips list to make your stay at Sample Self Storage - North an easy and enjoyable one!`
    },
    {
      name: `twitter:site`,
      content: `@Sample Self Storage - North`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];
  
  export const ogContactPage = [
    {
      property: `og:title`,
      content: `Contact Us  | Sample Self Storage - North`
    },
    {
      property: `og:description`,
      content: `Use the contact information or the contact form on this page to speak to one of our friendly self storage managers!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Sample Self Storage - North`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/contact-us`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];
  
  export const twitterContactPage = [
    {
      name: `twitter:title`,
      content: `@Contact Us  | Sample Self Storage - North`
    },
    {
      name: `twitter:description`,
      content: `Use the contact information or the contact form on this page to speak to one of our friendly self storage managers!`
    },
    {
      name: `twitter:site`,
      content: `@Sample Self Storage - North`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg`
    },
  ];