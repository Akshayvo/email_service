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
                label: 'Rocky Creek',
                path: `${environment.locationName}/rocky-creek`,
              },
            {
                id: '2',
                label: 'Agricola',
                path: `${environment.locationName}/agricola`,
            },
            {
                id: '3',
                label: 'Barton',
                path: `${environment.locationName}/barton`,
            },
            {
                id: '4',
                label: 'Wade',
                path: `${environment.locationName}/wade`,
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
