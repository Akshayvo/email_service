import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'VIEW RATES',
        path: `/view-rates`,
    },
    // {
    //     label: 'RENT NOW',
    //     path: `/rent-now`,
    // },
    // {
    //     label: 'RESERVE UNIT',
    //     path: `/reserve-unit`,
    // },
    {
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
        label: 'CONTACT US',
        path: '/contact-us'
    },
];
