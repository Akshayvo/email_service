"use strict";
exports.__esModule = true;
exports.twitterContactPage = exports.ogContactPage = exports.twitterStorageTipsPage = exports.ogStorageTipsPage = exports.twitterPayRentPage = exports.ogPayRentPage = exports.twitterHomePage = exports.ogHomePage = exports.contactPageScript = exports.homePageScript = exports.script = exports.twitterImage = exports.ogGraphImage = void 0;
var environment_1 = require("../../environments/environment");
var title_1 = require("../data/title");
var home_1 = require("../data/home");
var contact_1 = require("../data/contact");
// @Component({})
// export class getValues  {
//   constructor(
//   ) {
//     console.log('class is wrkng');
//     this.getData();
//   }
//   getData() {
// console.log('im ');
//     }
// } 
// new getValues();
var contactIndex = contact_1.contact.findIndex(function (x) { return x.label === 'Phone:'; });
var emailIndex = contact_1.contact.findIndex(function (x) { return x.label === 'Email:'; });
var sameAs = [];
var openingHours = [];
var amenityFeature = [];
contact_1.hours.forEach(function (hour) {
    return openingHours.push(hour.label + hour.data);
});
home_1.featuresList.forEach(function (feature) {
    return (amenityFeature.push({ "@type": "LocationFeatureSpecification", "name": feature.td1 }),
        amenityFeature.push({ "@type": "LocationFeatureSpecification", "name": feature.td2 }));
});
contact_1.socialLinks.forEach(function (links) {
    links.path ? sameAs.push(links.path) : sameAs.push(' ');
});
exports.ogGraphImage = "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jp"; // 4:3
exports.twitterImage = "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/inside-self-storage-unit.jpg"; // 1:1
exports.script = {
    imagesHomePage: [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/inside-self-storage-unit.jpg",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jp",
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/sample-self-storage-north-jumbotron.jp" // 16:9
    ],
    imagesContactPage: [
        "https://syrasoft-tenant-facing-websites.s3.amazonaws.com/Sample_Self_Storage/jpg/inside-self-storage-unit.jpg",
    ],
    telephone: contact_1.contact[contactIndex].data,
    map: "https://www.google.com/maps?ie=UTF8&hq&ll=44.264137,-88.3540592",
    description: "A superb collection of fine gifts and clothing to accent your stay in Mexico Beach." || title_1.homePageContent,
    streetAddress: "148 W 51st St",
    state: "New York",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10019",
    addressCountry: "US",
    id: environment_1.environment.websiteUrl || "",
    paymentAccepted: "Cash, Check, Credit Card, Debit Card, Online Credit Card, Online Debit Card",
    currenciesAccepted: "EUR",
    ratingValue: "4",
    bestRating: "5",
    reviewCount: "250",
    latitude: 40.761293,
    longitude: -73.982294
};
exports.homePageScript = [{
        "@context": "https://schema.org",
        "@type": ["Organization", "SelfStorage", "Place", "LocalBusiness"],
        "image": exports.script.imagesHomePage,
        "@id": exports.script.id,
        "name": environment_1.environment.facilityName,
        "description": exports.script.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": exports.script.streetAddress,
            "addressLocality": exports.script.addressLocality,
            "addressRegion": exports.script.addressRegion,
            "postalCode": exports.script.postalCode,
            "addressCountry": exports.script.addressCountry
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": exports.script.ratingValue,
            "bestRating": exports.script.bestRating,
            "reviewCount": exports.script.reviewCount
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": exports.script.latitude,
            "longitude": exports.script.longitude
        },
        "url": environment_1.environment.websiteUrl,
        "telephone": exports.script.telephone,
        "priceRange": "$$$",
        "openingHours": openingHours,
        "currenciesAccepted": exports.script.currenciesAccepted,
        "paymentAccepted": exports.script.paymentAccepted,
        "areaServed": {
            "@type": "State",
            "name": exports.script.state
        },
        "hasMap": exports.script.map,
        "amenityFeature": amenityFeature,
        "acceptsReservations": "True"
    }];
exports.contactPageScript = [
    {
        "@context": "http://schema.org",
        "@type": "Selfstorage",
        "name": environment_1.environment.facilityName,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": exports.script.addressLocality,
            "postalCode": exports.script.postalCode,
            "streetAddress": exports.script.streetAddress
        },
        "url": environment_1.environment.websiteUrl,
        "image": exports.script.imagesContactPage,
        "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": exports.script.telephone,
                "contactType": "reservations"
            }, {
                "@type": "ContactPoint",
                "telephone": exports.script.telephone,
                "contactType": "customer service"
            }],
        "email": contact_1.contact[emailIndex].data,
        "sameAs": sameAs
    }
];
exports.ogHomePage = [
    {
        property: "og:description",
        content: "" + title_1.homePageContent
    },
    {
        property: "og:type",
        content: "website"
    },
    {
        property: "og:title",
        content: "" + title_1.homePageTitle
    },
    {
        property: "og:site_name",
        content: "" + environment_1.environment.facilityName
    },
    {
        property: "og:url",
        content: "" + environment_1.environment.websiteUrl
    },
    {
        property: "og:image",
        content: exports.ogGraphImage
    },
];
exports.twitterHomePage = [
    {
        name: "twitter:site",
        content: "@" + environment_1.environment.facilityName
    },
    {
        name: "twitter:card",
        content: "summary"
    },
    {
        name: "twitter:creator",
        content: "@syrasoft_connect"
    },
    {
        name: "twitter:title",
        content: "@" + title_1.homePageTitle
    },
    {
        name: "twitter:description",
        content: "" + title_1.homePageContent
    },
    {
        name: "twitter:image",
        content: exports.twitterImage
    },
];
exports.ogPayRentPage = [
    {
        property: "og:title",
        content: "" + title_1.payRentPageTitle
    },
    {
        property: "og:description",
        content: "" + title_1.payRentPageContent
    },
    {
        property: "og:type",
        content: "website"
    },
    {
        property: "og:site_name",
        content: "" + environment_1.environment.facilityName
    },
    {
        property: "og:url",
        content: environment_1.environment.websiteUrl + "/pay-rent/rent-sub/login"
    },
    {
        property: "og:image",
        content: exports.ogGraphImage
    },
];
exports.twitterPayRentPage = [
    {
        name: "twitter:title",
        content: "@" + title_1.payRentPageTitle
    },
    {
        name: "twitter:description",
        content: "" + title_1.payRentPageContent
    },
    {
        name: "twitter:site",
        content: "@" + environment_1.environment.facilityName
    },
    {
        name: "twitter:card",
        content: "summary"
    },
    {
        name: "twitter:creator",
        content: "@syrasoft_connect"
    },
    {
        name: "twitter:image",
        content: exports.twitterImage
    },
];
exports.ogStorageTipsPage = [
    {
        property: "og:title",
        content: "" + title_1.storageTipsTitle
    },
    {
        property: "og:description",
        content: "" + title_1.storageTipsContent
    },
    {
        property: "og:type",
        content: "website"
    },
    {
        property: "og:site_name",
        content: "" + environment_1.environment.facilityName
    },
    {
        property: "og:url",
        content: environment_1.environment.websiteUrl + "/" + environment_1.environment.locationName + "/storage-tips"
    },
    {
        property: "og:image",
        content: exports.ogGraphImage
    },
];
exports.twitterStorageTipsPage = [
    {
        name: "twitter:title",
        content: "@" + title_1.storageTipsTitle
    },
    {
        name: "twitter:description",
        content: "" + title_1.storageTipsContent
    },
    {
        name: "twitter:site",
        content: "@" + environment_1.environment.facilityName
    },
    {
        name: "twitter:card",
        content: "summary"
    },
    {
        name: "twitter:creator",
        content: "@syrasoft_connect"
    },
    {
        name: "twitter:image",
        content: exports.twitterImage
    },
];
exports.ogContactPage = [
    {
        property: "og:title",
        content: "" + title_1.contactPageTitle
    },
    {
        property: "og:description",
        content: "" + title_1.contactPageContent
    },
    {
        property: "og:type",
        content: "website"
    },
    {
        property: "og:site_name",
        content: "" + environment_1.environment.facilityName
    },
    {
        property: "og:url",
        content: environment_1.environment.websiteUrl + "/contact-us"
    },
    {
        property: "og:image",
        content: exports.ogGraphImage
    },
];
exports.twitterContactPage = [
    {
        name: "twitter:title",
        content: "@" + title_1.contactPageTitle
    },
    {
        name: "twitter:description",
        content: "" + title_1.contactPageContent
    },
    {
        name: "twitter:site",
        content: "@" + environment_1.environment.facilityName
    },
    {
        name: "twitter:card",
        content: "summary"
    },
    {
        name: "twitter:creator",
        content: "@syrasoft_connect"
    },
    {
        name: "twitter:image",
        content: exports.twitterImage
    },
];
