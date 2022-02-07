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
                label: 'AFFORDABLE STORAGE #1 - 260 N GROVE',
                path: `${environment.locationName}/260-n-grove`,
              },
            {
                id: '2',
                label: 'AFFORDABLE STORAGE #2 - 201 N GROVE',
                path: `${environment.locationName}/201-n-grove`,
            },
              {
                id: '3',
                label: 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE',
                path: `${environment.locationName}/246-w-south-lane`,
            },
            {
                id: '4',
                label: 'AFFORDABLE STORAGE #4 - 817 S. GETTY',
                path: `${environment.locationName}/817-s-getty`,
            },
            {
                id: '5',
                label: 'AFFORDABLE STORAGE #5 - 430 S HWY 83',
                path: `${environment.locationName}/430-s-hwy-83`,
            },
            {
                id: '6',
                label: 'AFFORDABLE STORAGE #6 - 500 E. GARDEN',
                path: `${environment.locationName}/500-east-garden-street`,
            },
            {
                id: '7',
                label: 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST',
                path: `${environment.locationName}/2633-east-main-street`,
            },
            {
                id: '8',
                label: 'AFFORDABLE STORAGE #8 - 244 N. GROVE',
                path: `${environment.locationName}/244-n-grove`,
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
