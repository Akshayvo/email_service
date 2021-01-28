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
                label: 'Poughkeepsie/Arlington',
                path: '/location/poughkeepsie/arlington',
            },
            {
                id: '2',
                label: 'Poughkeepsie/Hyde Park',
                path: '/location/poughkeepsie/hyde-park',
              },
              {
                id: '3',
                label: 'Highland',
                path: '/location/highland',
            },
            {
                id: '4',
                label: 'Kingston/Lake Katrine',
                path: '/location/lake-katrine',
            },
            {
                id: '5',
                label: 'Pawling',
                path: '/location/pawling',
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
        path: '/storage-tips',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
