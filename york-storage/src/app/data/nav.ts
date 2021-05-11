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
                label: 'Platte Ave',
                path: `${environment.locationName}/platte-ave`,
              },
            {
                id: '2',
                label: 'Marquis Ave',
                path: `${environment.locationName}/marquis-ave`,
            },
              {
                id: '3',
                label: 'Lincoln Ave',
                path: `${environment.locationName}/lincoln-ave`,
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
