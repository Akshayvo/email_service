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
                label: 'South Wenatchee Self Storage',
                path: '/location/south-wenatchee',
            },
            {
                id: '2',
                label: `Leo's Self Storage`,
                path: '/location/leos-self-storage',
              },
            //   {
            //     id: '3',
            //     label: 'Montgomery/Walden',
            //     path: '/location/montgomery-walden',
            // },
            // {
            //     id: '4',
            //     label: 'Middletown/WallKill',
            //     path: '/location/middletown-wallKill',
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
        path: '/storage-tips',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
