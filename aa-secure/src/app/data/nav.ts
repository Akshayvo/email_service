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
                label: '751 Kenton Station Location',
                path: '/location/751-kenton-station',
            },
            {
                id: '1',
                label: '730 Kenton Station Location',
                path: '/location/730-kenton-station',
              },
            {
                id: '4',
                label: '113 McDonald Parkway',
                path: '/location/113-mcDonald-parkway'
            },
            {
                id: '3',
                label: '650 Parker Rd',
                path: '/location/650-Parker-Rd'
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
