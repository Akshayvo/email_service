export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link'
    },
    {
        label: 'UNIT AVAILABILITY',
        path: '/unit-availability',
        type: 'link'
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'CAR, BOAT & RV STORAGE',
        path: '/boat-rv-parking',
        type: 'link'
    },
    {
        label: 'STORAGE INFO',
        type: 'dropdown',
        path: '/storage-info',
        sublinks: [
            {
                id: '1',
                label: 'UNIT SIZER',
                path: '/unit-sizer'
             },
            {
                id: '2',
                label: 'STORAGE TIPS',
                path: 'storage-tips',
            },
    ]
},
    {
        label: 'CONTACT US',
        path: 'contact-us',
        type: 'link'
    },
];
