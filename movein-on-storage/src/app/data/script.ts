export const script = {
    // Put your script here
    "@context": "https://schema.org",
      "@type": "SelfStorage",
      "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Movein_On_Storage/jpg/movin-on-storage-center-climate-control+(1x1).jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Movein_On_Storage/jpg/movin-on-storage-center-climate-control+(4x3).jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Movein_On_Storage/jpg/movin-on-storage-center-climate-control+(16x9).jpg"
       ],
      "@id": "https://www.movinonstorage.com/",
      "name": "Movin on Storage Center",
       "description": "Are you in search of affordable self-storage units near Charleston, WV? Movin' On Storage Centerhas a wide variety of sizes and excellent customer service!",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "200 Piedmont Road",
        "addressLocality": "Charleston",
        "addressRegion": "WV",
        "postalCode": "25301",
        "addressCountry": "United state"
      },
     "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "18"
  },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 38.356732,
        "longitude": -81.628422
      },
      "url": "https://www.movinonstorage.com/",
      "telephone": "(304) 344-1104",
      
      "priceRange": "$49 - $495",
     "openingHours":["Mo-Sat 09:00-17:00"],
      "currenciesAccepted": "USD",
    "paymentAccepted":"Cash, Credit card, Online Payment",
       "areaServed": {
    "@type": "State",
    "name": "West Virginia"
     },
 
      "acceptsReservations": "True"
};

export const contactscript = {
    // Put your script here
    "@context": "http://schema.org",
  "@type": "Selfstorage",
  "name": "Movin on Storage Center",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Charleston",
    "postalCode": "25301",
    "streetAddress": "200 Piedmont Road"
  },
   "url": "https://www.movinonstorage.com/",
   "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Movein_On_Storage/jpg/movin-on-storage-center-climate-control+(1x1).jpg"
       ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "(304) 344-1104",
    "contactType": "reservations"
  },{
    "@type": "ContactPoint",
    "telephone": "(304) 344-1104",
    "contactType": "customer service"
  }],
  "email": "movinonstoragecenter@gmail.com",
  "sameAs": [
    "",
    "",
    ""
  ]
};

