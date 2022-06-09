import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Rent Now',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'RCS Storage - West',
                path: `${environment.locationName}/rcs-west`,
              },
            {
                id: '2',
                label: 'RCS Storage - East',
                path: `${environment.locationName}/rcs-east`,
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
