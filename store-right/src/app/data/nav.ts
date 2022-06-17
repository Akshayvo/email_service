import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'VIEW RATES',
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
        label: 'PAY RENT',
        path: '/pay-rent'
    },
    {
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`
    },
    {
        id: 0,
        label: 'AVAILABLE APARTMENTS',
        // path: 'https://www.riverbendapt.com/apartments/'
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
