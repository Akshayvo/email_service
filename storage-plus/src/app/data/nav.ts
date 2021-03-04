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
                label: 'Foley',
                path: '/location/foley',
              },
            {
                id: '2',
                label: 'Silverhill',
                path: '/location/silverhill',
            },
              {
                id: '3',
                label: 'Barnwell',
                path: '/location/barnwell',
            },
            {
                id: '4',
                label: 'Belforest',
                path: '/location/belforest',
            },
            {
                id: '5',
                label: 'Fairhope',
                path: '/location/fairhope',
            },
            {
                id: '6',
                label: 'Robertsdale',
                path: '/location/robertsdale',
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
