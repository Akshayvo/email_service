import { env } from 'process';
import { environment } from '../../environments/environment';
import { homePageContent, homePageTitle, payRentPageContent,
  payRentPageTitle, storageTipsContent, storageTipsTitle,
contactPageContent, contactPageTitle } from '../data/title';
import { HomeComponent } from '../home/home.component';

export const script = {
    // Put your script here
};

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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
      content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
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
        content: `https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Red_School/jpg/red-school-self-storage-exterior.jpg`
      },
    ];