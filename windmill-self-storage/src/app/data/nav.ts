import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'VIEW UNIT SIZES',
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
    // {
    //     label: 'PAY RENT',
    //     path: '/pay-rent'
    // },
    // {
    //     label: 'STORAGE TIPS',
    //     path: `${environment.locationName}/storage-tips`
    // },
    // {
    //     label: 'UNIT SIZER',
    //     path: '/unit-sizer'
    // },
    {
            label: 'GALLERY',
            path: '/gallery'
        },
    {
        label: 'CONTACT US',
        path: '/contact-us'
    },
];
