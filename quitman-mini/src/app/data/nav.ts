import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Location',
        type: 'location',
        path: `/location`,
        sublinks: [
            {
                id: '1',
                label: 'Quitman Mini Storage',
                path: `${environment.locationName}/quitman-mini`,
              },
               {
                id: '2',
                label: 'Heber Springs Xtra Storage',
                path: `${environment.locationName}/heber-springs`,
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
