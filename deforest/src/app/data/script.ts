export const script = {
  "@context": "https://schema.org",
      "@type": "SelfStorage",
      "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Deforest/deforest-self-storage-units-in-WI+(1x1).jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Deforest/deforest-self-storageunits-in-WI+(4x3).jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Deforest/deforest-self-storage-units-in-WI+(16x9).jpg"
       ],
      "@id": "https://www.deforestselfstorage.com/",
      "name": "DeForest Self Storage",
       "description": "Deforest Self Storage offers convenient 24/7 access to your belongings, online payments and a variety of unit sizes for all of your self storage needs.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7227 Gene St",
        "addressLocality": "Deforest",
        "addressRegion": "WI",
        "postalCode": "53532",
        "addressCountry": "United state"
      },
     "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "150"
  },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.25324,
        "longitude": -89.3845
      },
      "url": "https://www.deforestselfstorage.com/",
      "telephone": "1 608-277-5601",
      
      "priceRange": "$30 - $270",
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
  "@context": "http://schema.org",
  "@type": "Selfstorage",
  "name": "DeForest Self Storage",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Deforest",
    "postalCode": "53532",
    "streetAddress": "7227 Gene St"
  },
   "url": "https://www.deforestselfstorage.com/",
   "image": [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Deforest/deforest-self-storage-units-in-WI+(1x1).jpg"
       ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "1 608-277-5601",
    "contactType": "reservations"
  },{
    "@type": "ContactPoint",
    "telephone": "1 608-277-5601",
    "contactType": "customer service"
  }],
  "email": "info@deforestselfstorage.com",
  "sameAs": [
    "",
    "",
    ""
  ]

};

