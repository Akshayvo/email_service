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
                label: 'Baldwin County - Foley',
                path: '/location/foley',
              },
            {
                id: '2',
                label: 'Baldwin County - Silverhill',
                path: '/location/silverhill',
            },
              {
                id: '3',
                label: 'Baldwin County - Barnwell',
                path: '/location/barnwell',
            },
            {
                id: '4',
                label: 'Baldwin County - Belforest',
                path: '/location/belforest',
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
