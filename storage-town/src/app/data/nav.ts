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
                id: '2',
                label: 'Chester - Brookside Ave',
                path: '/location/chester',
            },
            {
                id: '1',
                label: 'Chester - Andrews Lane',
                path: '/location/florida-and-warwick',
              },
              {
                id: '3',
                label: 'Montgomery/Walden',
                path: '/location/montgomery-walden',
            },
            {
                id: '4',
                label: 'Middletown/WallKill',
                path: '/location/middletown-wallKill',
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
