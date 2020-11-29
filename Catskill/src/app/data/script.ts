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
    content: `Catskill Self Storage has been proudly serving Catskill, Cairo, Leeds, and surrounding communities with
affordable storage units since 2004!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: `Affordable Storage Units Near Catskill, NY, 12414 | Catskill Self Storage`
  },
  {
    property: `og:site_name`,
    content: `Catskill Self Storage, Catskill, NY, 12414`
  },
  {
    property: `og:url`,
    content: `https://sample-self-storage-staging.netlify.app/`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
  },
];

export const twitterHomePage = [
  {
    name: `twitter:site`,
    content: `@Catskill Self Storage, Catskill, NY, 12414`
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
    content: `@Affordable Storage Units Near Catskill, NY, 12414 | Catskill Self Storage`
  },
  {
    name: `twitter:description`,
    content: `Catskill Self Storage has been proudly serving Catskill, Cairo, Leeds, and surrounding communities with
affordable storage units since 2004!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
  },
];

export const ogPayRentPage = [
    {
      property: `og:title`,
      content: `Pay Your Rent Online | Catskill Self Storage, Catskill, NY, 12414 `
    },
    {
      property: `og:description`,
      content: `We make it easy for you to pay your rent and check your balance online, 24/7.
      Simply login with the credentials supplied by our office to gain access!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/pay-rent/rent-sub/login`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];
  
  export const twitterPayRentPage = [
    {
      name: `twitter:title`,
      content: `@Pay Your Rent Online | Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      name: `twitter:description`,
      content: `We make it easy for you to pay your rent and check your balance online, 24/7.
      Simply login with the credentials supplied by our office to gain access!`
    },
    {
      name: `twitter:site`,
      content: `@Catskill Self Storage, Catskill, NY, 12414`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];

  export const ogStorageTipsPage = [
    {
      property: `og:title`,
      content: `Storage Tips | StorageTown Rental Spaces`
    },
    {
      property: `og:description`,
      content: `Moving can be a hassle, why not make it easier? Use these helpful hints and
      make your stay with us a breeze!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/storage-tips`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];
  
  export const twitterStorageTipsPage = [
    {
      name: `twitter:title`,
      content: `@Storage Tips | StorageTown Rental Spaces`
    },
    {
      name: `twitter:description`,
      content: `Moving can be a hassle, why not make it easier? Use these helpful hints and
      make your stay with us a breeze!`
    },
    {
      name: `twitter:site`,
      content: `@StorageTown Rental Speces`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];
  
  export const ogContactPage = [
    {
      property: `og:title`,
      content: `Contact Catskill Self Storage | Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      property: `og:description`,
      content: `Our friendly and knowledgeable staff are ready and willing to answer all of your self storage
      and U-Haul truck rental questions! Simply call or drop us a line!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      property: `og:url`,
      content: `https://sample-self-storage-staging.netlify.app/contact-us`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];
  
  export const twitterContactPage = [
    {
      name: `twitter:title`,
      content: `@Contact Catskill Self Storage | Catskill Self Storage, Catskill, NY, 12414`
    },
    {
      name: `twitter:description`,
      content: `Our friendly and knowledgeable staff are ready and willing to answer all of your self storage
      and U-Haul truck rental questions! Simply call or drop us a line!`
    },
    {
      name: `twitter:site`,
      content: `@Catskill Self Storage, Catskill, NY, 12414`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Catskill_Images/jpg/catskill-self-storage-jumbotron.jpg`
    },
  ];