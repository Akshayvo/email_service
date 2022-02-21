import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link',
    },
    {
        label: 'LOCATIONS',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'Mohawk Self Storage',
                path: 'https://mohawkselfstorage.com/',
              },
              {
                  id: '2',
                  label: 'Richfield Springs Self Storage',
                  path: 'https://richfieldspringsselfstorage.com/',
              },
        ]
    },
    {
        label: 'VIEW RATES',
        path: `${environment.locationName}/view-rates`,
        type: 'link',
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
        path: '/pay-rent',
        type: 'link',
    },
    {
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`,
        type: 'link',
    },
    {
        label: 'UNIT SIZER',
        path: '/unit-sizer',
        type: 'link',
    },
    {
        label: 'CONTACT US',
        path: '/contact-us',
        type: 'link',
    },
];
