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
                label: 'Evanston Ave Location',
                path: `${environment.locationName}/evanston-ave`,
              },
        ]
    },
    {
        label: 'View Rates',
        type: 'dropdown1',
        path: `/view-rates`,
        sublinks: [
            {
                id: '1',
                label: 'Evanston Ave Location',
                path: `${environment.locationName}/evanston-ave/view-rates`,
              },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    // {
    //     label: 'Storage Tips',
    //     path: `${environment.locationName}/storage-tips`,
    //     type: 'link'
    // },
    {
        label: `FAQ's`,
        path: '/frequently-asked-questions',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
