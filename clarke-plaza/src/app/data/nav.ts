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
                label: 'Clarke Plaza',
                path: `${environment.locationName}/clarke-plaza`,
              },
            {
                id: '2',
                label: 'Ossipee',
                path: `${environment.locationName}/ossipee`,
            },
            //   {
            //     id: '3',
            //     label: 'Barnwell',
            //     path: `${environment.locationName}/barnwell`,
            // },
            // {
            //     id: '4',
            //     label: 'Belforest',
            //     path: `${environment.locationName}/belforest`,
            // },
            // {
            //     id: '5',
            //     label: 'Fairhope',
            //     path: `${environment.locationName}/fairhope`,
            // },
            // {
            //     id: '6',
            //     label: 'Robertsdale',
            //     path: `${environment.locationName}/robertsdale`,
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
