export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link'
    },
    {
        label: 'LOCATIONS',
        type: 'dropdown',
        sublinks: [
            {
                sub_label: 'Victor Storage - Mall',
                path: '/locations',
            },
            {
                sub_label: 'Victor Storage - Village',
                path: '/locations',
            }
        ]
    },
    {
        label: 'RENT SPACE',
        path: '/rent-space',
        type: 'link'
    },
    {
        label: 'STORAGE TIPS',
        path: '/storage-tips',
        type: 'link'
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'CONTACT US',
        path: '/contact',
        type: 'link'
    },
];
