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
                label: 'Dallas Secure Storage',
                path: `${environment.locationName}/dallas-secure-storage`,
              },
            {
                id: '2',
                label: 'Location 2',
                path: `${environment.locationName}/godsey-secure-storage`,
            },
            //   {
            //     id: '3',
            //     label: 'Location 3',
            //     path: `${environment.locationName}/location-3`,
            // },
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
