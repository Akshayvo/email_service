import { environment } from '../../environments/environment';export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link',
    },
    // {
    //     label: 'LOCATIONS',
    //     type: 'dropdown',
    //     path: '/location',
    //     sublinks: [
    //         {
    //             id: '1',
    //             label: 'Linden Self Storage',
    //             path: 'https://www.lindenstorage.com/',
    //           },
    //           {
    //               id: '2',
    //               label: 'Macedon Self Storage',
    //               path: 'https://www.macedonstorage.com/',
    //           },
    //     ]
    // },
    {
        label: 'RENT NOW',
        path: `${environment.locationName}/rent-now`,
        type: 'link',
    },
    {
        label: 'VIEW RATES',
        path: `${environment.locationName}/view-rates`,
        type: 'link',
    },
    {
        label: 'PAY RENT',
        path: 'pay-rent',
        type: 'link',
    },
    // {
    //     label: 'UNIT SIZER',
    //     path: 'unit-sizer',
    //     type: 'link',
    // },
    {
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`,
        type: 'link',
    },
    // {
    //     label: 'TESTIMONIALS',
    //     path: 'testimonials',
    //     type: 'link',
    // },
    {
        label: 'CONTACT US',
        path: 'contact-us',
        type: 'link',
    },
];
