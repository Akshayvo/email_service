export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'View Rates By Location',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: `1321 North Jefferson St`,
                path: '/location/1321-north-jefferson-st-location',
            },
            {
                id: '2',
                label: `1687 US-441`,
                path: '/location/1687-US-441-location',
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
        path: '/contact',
        type: 'link'
    },
];
