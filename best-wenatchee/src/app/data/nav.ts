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
                label: 'South Wenatchee Self Storage',
                path: `${environment.locationName}/south-wenatchee`,
              },
               {
                id: '2',
                label: 'Leo\'s Self Storage',
                path: `${environment.locationName}/leos-storage`,
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
