import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle } from '../data/title';
import { featuresList } from '../data/home';
import { contact, hours, socialLinks } from '../data/contact';

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
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_1.jpg",
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_2.JPG",
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_3.JPG"
     ],
     imagesContactPage: [
      "https://syrasoft-tenant-facing-websites.s3.us-east-1.amazonaws.com/Railroad_Storage/jpg/Self_Storage_Rail_Road_1.jpg",
     ],
     telephone: contact[contactIndex].data,
     map: "https://www.facebook.com/Railroad-St-Self-Storage",
     description: "" || homePageContent,
     streetAddress: "113 Railroad St",
     state: "Wisconsin",
     addressLocality: "Sun Prairie",
     addressRegion: "WI",
     postalCode: "53590",
     addressCountry: "US",
     id: "" || environment.websiteUrl,
     paymentAccepted:  "Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card",
     currenciesAccepted: "USD",
     ratingValue: "4.8",
     bestRating: "5",
     reviewCount: "4",
     latitude: 43.1793090611163,
     longitude: -89.21367618200023,
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
  
  "priceRange": "$140",
  "openingHours": "Mo-Su 09:00-17:00" || openingHours,
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

  