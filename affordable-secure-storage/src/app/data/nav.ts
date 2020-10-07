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
                label: 'Affordable Secure Storage - Floral City',
                path: '/location/affordable-secure-storage-floral-city',
            },
            {
                id: '2',
                label: 'Affordable Secure Storage - West Hernando',
                path: '/location/affordable-secure-storage-west-hernando',
            },
            {
                id: '3',
                label: 'Affordable Secure Storage - Labelle',
                path: '/location/affordable-secure-storage-labelle',
            },
            {
                id: '4',
                label: 'Affordable Secure Storage - Backyard',
                path: '/location/affordable-secure-storage-backyard',
            },
            {
                id: '5',
                label: 'Affordable Secure Storage - Hernando',
                path: '/location/affordable-secure-storage-hernando',
            }
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
        path: '/contact',
        type: 'link'
    },
];
