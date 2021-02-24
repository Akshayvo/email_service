"use strict";
exports.__esModule = true;
exports.navLinks = void 0;
var environment_1 = require("../../environments/environment");
exports.navLinks = [
    {
        label: 'HOME',
        path: '/'
    },
    {
        label: 'VIEW RATES',
        path: environment_1.environment.locationName + "/view-rates"
    },
    // {
    //     label: 'RENT NOW',
    //     path: `${environment.locationName}/rent-now`,
    // },
    {
        label: 'RESERVE UNIT',
        path: environment_1.environment.locationName + "/reserve-unit"
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent'
    },
    {
        label: 'STORAGE TIPS',
        path: environment_1.environment.locationName + "/storage-tips"
    },
    {
        label: 'UNIT SIZER',
        path: '/unit-sizer'
    },
    {
        label: 'CONTACT US',
        path: '/contact-us'
    },
];
