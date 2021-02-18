import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageTitle, payRentPageContent,
  storageTipsTitle, storageTipsContent, contactPageTitle, contactPageContent } from "./title";
  import { featuresList } from '../data/home';
  import { contact, hours, socialLinks } from '../data/contact';
  import { FetchDataService } from '../api-bundle/services/fetch-data.service';
  import { OnInit, Component, Input, Output  } from '@angular/core';

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
  
  socialLinks.forEach(links => {
    links.path ? sameAs.push(links.path) : sameAs.push(' ')
  }
  );
    
  export const ogGraphImage = `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-16x9.jpg` // 4:3
  
  export const twitterImage = `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-1x1.jpg` // 1:1
  
  export const script = {               // Please fill this script according to facility's information
      imagesHomePage: [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-1x1.jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-4x3.jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-16x9.jpg"
       ],
       imagesContactPage: [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/southern-maine-storage-1x1.jpg",
       ],
       telephone: contact[contactIndex].data,
       map: "https://goo.gl/maps/E9c7btGiYs1C21UU7",
       description: "" || homePageContent,
       streetAddress: " 1030 Portland Rd",
       state: "Wisconsin",
       addressLocality: "Saco",
       addressRegion: "ME",
       postalCode: "04072",
       addressCountry: "US",
       id: environment.websiteUrl || "",
       paymentAccepted:  "Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card",
       currenciesAccepted: "USD",
       ratingValue: "4.6",
       bestRating: "5",
       reviewCount: "15",
       latitude: 43.55832,
       longitude: -70.40244,
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
      
      "priceRange": "$15 - $245",
      "openingHours": ['Mo,Tu,We,Th,Fr 8:00 - 17:00'],
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `${environment.websiteUrl}/pay-rent/login`
      },
      {
        property: `og:image`,
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Southern_Maine/jpg/southern-maine-storage-jumbotron.jpg`
      },
    ];