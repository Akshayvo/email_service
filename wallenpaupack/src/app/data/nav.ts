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
                label: 'Hawley',
                path: `${environment.locationName}/hawley`,
              },
            {
                id: '2',
                label: 'Lakeville',
                path: `${environment.locationName}/lakeville`,
            },
              {
                id: '3',
                label: 'Lake Ariel',
                path: `${environment.locationName}/lake-ariel`,
            },
            {
                id: '4',
                label: 'Greentown',
                path: `${environment.locationName}/greentown`,
            },
            {
                id: '4',
                label: 'Greentown1',
                path: `${environment.locationName}/greentown1`,
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
