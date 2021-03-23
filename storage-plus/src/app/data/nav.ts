import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Location',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'Foley',
                path: `${environment.locationName}/foley`,
              },
            {
                id: '2',
                label: 'Silverhill',
                path: `${environment.locationName}/silverhill`,
            },
              {
                id: '3',
                label: 'Barnwell',
                path: `${environment.locationName}/barnwell`,
            },
            {
                id: '4',
                label: 'Belforest',
                path: `${environment.locationName}/belforest`,
            },
            {
                id: '5',
                label: 'Fairhope',
                path: `${environment.locationName}/fairhope`,
            },
            {
                id: '6',
                label: 'Robertsdale',
                path: `${environment.locationName}/robertsdale`,
            },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Storage Tips',
        path: '/storage-tips',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
