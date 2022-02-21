import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Locations',
        type: 'dropdown',
        path: '/location',
        sublinks: [
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
            
            {
                id: '2',
                label: 'Lake Ariel',
                path: `${environment.locationName}/lake-ariel`,
            },
            {
                id: '1',
                label: 'Greentown',
                path: `${environment.locationName}/greentown`,
            },
            {
                id: '5',
                label: 'Greentown1',
                path: `${environment.locationName}/greentown1`,
            },
            
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Free* Truck Rental',
        path: `${environment.locationName}/truck-rental`,
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
