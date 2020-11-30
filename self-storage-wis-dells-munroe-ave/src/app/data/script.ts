export const script = {
    // Put your script here
    "@context": "https://schema.org",
      "@type": "SelfStorage",
      "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(1x1).jpgg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(4x3).jpgg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(16x9).jpgg"
       ],
      "@id": "https://www.selfstorageofwisdells23.com/",
      "name": "Self Storage of Wis Dells",
       "description": "Self Storage of Wis Dells serves Wisconsin Dells and the surrounding communities with a variety of well-maintained and affordable self storage units accessible 24/7.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "301 W Munroe Ave",
        "addressLocality": "Lake Delton",
        "addressRegion": "WI",
        "postalCode": "53965",
        "addressCountry": "United state"
      },
     "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.2",
    "reviewCount": "5"
  },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.589987,
        "longitude": -89.800806
      },
      "url": "https://www.selfstorageofwisdells23.com/",
      "telephone": "(608) 566-5948",
      
      "priceRange": "$40 - $85",
     "openingHours":["Mo-Sun 00:00-24:00"],
      "currenciesAccepted": "USD",
    "paymentAccepted":"Cash, Credit card, Online Payment",
       "areaServed": {
    "@type": "State",
    "name": "Wisconsin"
     },
 
      "acceptsReservations": "True"
};

export const contactscript = {
    // Put your script here
    "@context": "http://schema.org",
  "@type": "Selfstorage",
  "name": "Self Storage of Wis Dells",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lake Delton",
    "postalCode": "53965",
    "streetAddress": "301 W Munroe Ave"
  },
   "url": "https://www.selfstorageofwisdells23.com/",
   "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Self_Storage_Wisconsin_Dells_Munroe_Ave/jpg/self-storage-wisconsin-dells-row-of-units+(1x1).jpgg"
       ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "(608) 566-5948",
    "contactType": "reservations"
  },{
    "@type": "ContactPoint",
    "telephone": "(608) 566-5948",
    "contactType": "customer service"
  }],
  "email": "rentals@selfstorageofwisdells.com",
  "sameAs": [
    "",
    "",
    ""
  ]
};