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
<<<<<<< HEAD
                label: 'Greentown',
                path: `${environment.locationName}/greentown`,
              },
            {
                id: '2',
                label: 'Lake Ariel',
                path: `${environment.locationName}/lake-ariel`,
            },
              {
                id: '3',
                label: 'Hawley',
                path: `${environment.locationName}/hawley`,
            },
            {
                id: '4',
                label: 'Lakeville',
                path: `${environment.locationName}/lakeville`,
            },
            
=======
                label: 'Foley',
                path: `${environment.locationName}/foley`,
              },
            {
                id: '2',
                label: 'Silverhill',
                path: `${environment.locationName}/silverhill`,
            },
              {
                id: '3',
                label: 'Barnwell',
                path: `${environment.locationName}/barnwell`,
            },
            {
                id: '4',
                label: 'Belforest',
                path: `${environment.locationName}/belforest`,
            },
            {
                id: '5',
                label: 'Fairhope',
                path: `${environment.locationName}/fairhope`,
            },
            {
                id: '6',
                label: 'Robertsdale',
                path: `${environment.locationName}/robertsdale`,
            },
>>>>>>> 2fb4710631fd66ed61fa300b3f9b4f3d08827039
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
