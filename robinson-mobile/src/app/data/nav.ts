import { environment } from '../../environments/environment';

export const navLinks = [
    {
        id: 1,
        label: 'HOME',
        path: '/',
    },
    {
        id: 1,
        label: 'RATES',
        path: `${environment.locationName}/view-rates`,
    },
    // {
    //     label: 'RENT NOW',
    //     path: `${environment.locationName}/rent-now`,
    // },
    // {
    //     label: 'RESERVE UNIT',
    //     path: `${environment.locationName}/reserve-unit`,
    // },
    {
        id: 1,
        label: 'PAY RENT',
        path: '/pay-rent'
    },
    // {
    //     label: 'STORAGE TIPS',
    //     path: `${environment.locationName}/storage-tips`
    // },
    // {
    //     label: 'UNIT SIZER',
    //     path: '/unit-sizer'
    // },
    {
        id: 0,
        label: 'STORAGE FACILITY',
        // path: 'https://www.riverbendapt.com/apartments/'
    },
    {
        id: 1,
        label: 'CONTACT US',
        path: '/contact-us'
    },
    {
        id: 1,
        label: 'HOW IT WORKS',
        path: '/how-it-works'
    },
];
