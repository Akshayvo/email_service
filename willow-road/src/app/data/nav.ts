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
        path: `/location`,
        sublinks: [
            {
                id: '1',
                label: 'Willow Road Location',
                path: `${environment.locationName}/willow-rd`,
              },
              {
                id: '2',
                label: 'Vista Dr Location',
                path: `${environment.locationName}/vista-dr`,
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
