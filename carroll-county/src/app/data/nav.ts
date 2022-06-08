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
                label: 'Carroll County Storage - McKenzie',
                path: '/location/mcKenzie',
            },
            {
                id: '2',
                label: 'Carroll County Storage - Huntingdon',
                path: '/location/huntingdon',
              },
              {
                id: '3',
                label: 'Carroll County Storage at the Airport',
                path: '/location/airport',
            },
        ]
    },
    // {
    //     label: 'Pay Rent',
    //     path: '/pay-rent',
    //     type: 'link'
    // },
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
