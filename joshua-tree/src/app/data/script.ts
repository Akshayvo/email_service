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
  (amenityFeature.push({ "@type": "LocationFeatureSpecification",  "name": feature.td1}),
  amenityFeature.push({ "@type": "LocationFeatureSpecification",  "name": feature.td2}))
)

export const script = {               // Please fill this script according to facility's information
  imagesHomePage: [
    "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/inside-self-storage-unit.jpg", // 1:1
    "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg", // 4:3
    "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jpg" // 16:9
   ],
   telephone: contact[contactIndex].data,
   map: "https://goo.gl/maps/MZ2bUNFNT1HWfDfw5",
   description: "Check out the competitive rates for our high-quality self storage units or recreational vehicle parking at Joshua Tree Mini-Storage!",
   streetAddress: "148 W 51st St",
   state: "California",
   addressLocality: "61325 Twentynine Palms Highway",
   addressRegion: "CA",
   postalCode: "92252",
   addressCountry: "CA",
   id: environment.websiteUrl || "",
   paymentAccepted:  "Cash, Check, Credit Card, Debit Card",
   currenciesAccepted: "USD",
   ratingValue: "4.2",
   bestRating: "5",
   reviewCount: "15",
   latitude: 40.761293,
   longitude: -73.982294,
   openingHours: [],
   priceRange: '75 - 375'
};

export const homePageScript = [ {
  "@context": "https://schema.org",
  "@type": ["Organization","SelfStorage","Place","LocalBusiness"],
  "image": script.imagesHomePage,
  "@id": script.id,
  "name": environment.facilityName,
   "description": script.description || homePageContent,
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
  
  "priceRange": script.priceRange,
  "openingHours": script.openingHours,
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
       "url": `${environment.websiteUrl}/contact-us`,
       "image": script.imagesHomePage[0],
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
    content: `Are you in search of affordable self storage units or recreational vehicle parking in Joshua Tree? We've been serving the community since 1981! Call today!`
  },
  {
    property: `og:type`,
    content: `website`
  },
  {
    property: `og:title`,
    content: `Affordable Self Storage Units & RV Parking in Joshua Tree`
  },
  {
    property: `og:site_name`,
    content: `Joshua Tree Mini Storage`
  },
  {
    property: `og:url`,
    content: `https://joshuatreeministorage.com/`
  },
  {
    property: `og:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
  },
];

export const twitterHomePage = [
  {
    name: `twitter:site`,
    content: `@Joshua Tree Mini Storage`
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
    content: `@Affordable Self Storage Units & RV Parking in Joshua Tree`
  },
  {
    name: `twitter:description`,
    content: `Are you in search of affordable self storage units or recreational vehicle parking in Joshua Tree? We've been serving the community since 1981! Call today!`
  },
  {
    name: `twitter:image`,
    content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
  },
];

export const ogPayRentPage = [
    {
      property: `og:title`,
      content: `Pay Rent  | Joshua Tree Mini Storage`
    },
    {
      property: `og:description`,
      content: `Follow the instructions on this page, or you can call our office to
speak with one of our friendly self storage managers to get access to your online account!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Joshua Tree Mini Storage`
    },
    {
      property: `og:url`,
      content: `https://joshuatreeministorage.com/pay-rent/rent-sub/login`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];
  
  export const twitterPayRentPage = [
    {
      name: `twitter:title`,
      content: `@Pay Rent  | Joshua Tree Mini Storage`
    },
    {
      name: `twitter:description`,
      content: `Follow the instructions on this page, or you can call our office to
speak with one of our friendly self storage managers to get access to your online account!`
    },
    {
      name: `twitter:site`,
      content: `@Joshua Tree Mini Storage`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];

  export const ogStorageTipsPage = [
    {
      property: `og:title`,
      content: `Storage Tips  | Joshua Tree Mini Storage`
    },
    {
      property: `og:description`,
      content: `Our quick storage tips page will help you figure out how to best use our services and avoid common pitfalls in self storage!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Joshua Tree Mini Storage`
    },
    {
      property: `og:url`,
      content: `https://joshuatreeministorage.com/storage-tips`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];
  
  export const twitterStorageTipsPage = [
    {
      name: `twitter:title`,
      content: `@Storage Tips  | Joshua Tree Mini Storage`
    },
    {
      name: `twitter:description`,
      content: `Our quick storage tips page will help you figure out how to best use our services and avoid common pitfalls in self storage!`
    },
    {
      name: `twitter:site`,
      content: `@Joshua Tree Mini Storage`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];
  
  export const ogContactPage = [
    {
      property: `og:title`,
      content: `Contact Us  | Joshua Tree Mini Storage`
    },
    {
      property: `og:description`,
      content: `If you have questions about your account or the services we offer, take a moment to fill our out form, or use the contact information to speak with us!`
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      property: `og:site_name`,
      content: `Joshua Tree Mini Storage`
    },
    {
      property: `og:url`,
      content: `https://joshuatreeministorage.com/contact-us`
    },
    {
      property: `og:image`,
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];
  
  export const twitterContactPage = [
    {
      name: `twitter:title`,
      content: `@Contact Us  | Joshua Tree Mini Storage`
    },
    {
      name: `twitter:description`,
      content: `If you have questions about your account or the services we offer, take a moment to fill our out form, or use the contact information to speak with us!`
    },
    {
      name: `twitter:site`,
      content: `@Joshua Tree Mini Storage`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Joshua_Tree_Images/jpg/joshua-tree-self-storage.jpg`
    },
  ];