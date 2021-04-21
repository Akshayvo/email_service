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
                label: 'Storage Square',
                path: `${environment.locationName}/storage-square`,
              },
            {
                id: '2',
                label: "Aaron's Space Station",
                path: `${environment.locationName}/aarons-space-station`,
            },
            //   {
            //     id: '3',
            //     label: 'Lincoln Ave',
            //     path: `${environment.locationName}/lincoln-ave`,
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
