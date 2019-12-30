export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link',
    },
    {
        label: 'LOCATIONS',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'Macedon Self Storage',
                path: 'https://www.macedonstorage.com/',
              },
              {
                  id: '2',
                  label: '390 Self Storage',
                  path: 'https://www.390selfstorage.com/',
              },
        ]
    },
    {
        label: 'VIEW RATES',
        path: '/view-rates',
        type: 'link',
    },
    {
        label: 'PAY RENT',
        path: 'pay-rent',
        type: 'link',
    },
    {
        label: 'UNIT SIZER',
        path: 'unit-sizer',
        type: 'link',
    },
    {
        label: 'STORAGE TIPS',
        path: 'storage-tips',
        type: 'link',
    },
    {
        label: 'CONTACT US',
        path: 'contact-us',
        type: 'link',
    },
];
