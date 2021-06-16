import { environment } from '../../environments/environment';

export const navLinks = [
    {
        id:'home',
        label: 'HOME',
        path: '/',
    },
    {
        id:'view-rates',
        label: 'VIEW RATES',
        path: `${environment.locationName}/view-rates`,
    },
    {
        id:'rent-now',
        label: 'RENT NOW',
        path: `${environment.locationName}/rent-now`,
    },
    // {
    //     label: 'RESERVE UNIT',
    //     path: `${environment.locationName}/reserve-unit`,
    // },
    {
        id:'pay-rent',
        label: 'PAY RENT',
        path: '/pay-rent'
    },
    {
        id:'storage-tips',
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`
    },
    {
        id:'unit-sizer',
        label: 'UNIT SIZER',
        path: '/unit-sizer'
    },
    {
        id:'contact-us',
        label: 'CONTACT US',
        path: '/contact-us'
    },
];
