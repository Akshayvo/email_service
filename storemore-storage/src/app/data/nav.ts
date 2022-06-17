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
                label: '6519 Tuckahoe Rd, Williamson',
                path: `${environment.locationName}/Tuckahoe-Road`,
              },
            {
                id: '2',
                label: '4072 Ridge Rd, Williamson',
                path: `${environment.locationName}/pratt-road`,
            },
              {
                id: '3',
                label: '205 Rotterdam Road, Sodus',
                path: `${environment.locationName}/rotterdam-road`,
            },
            {
                id: '4',
                label: '5587 Route 14, Alton',
                path: `${environment.locationName}/alton`,
            },
            {
                id: '5',
                label: '3913 Route 14, Lyons',
                path: `${environment.locationName}/lyons`,
            },
            {
                id: '6',
                label: '5802 Limekiln Road, Wolcott',
                path: `${environment.locationName}/Wolcott`,
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
        path: `${environment.locationName}/storage-tips`,
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
