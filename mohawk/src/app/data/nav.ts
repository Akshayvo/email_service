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
                label: 'Richfield Springs Self Storage',
                path: 'https://richfieldspringsselfstorage.com/',
              },
              {
                  id: '2',
                  label: 'Herkimer Storage Outlet',
                  path: 'https://herkimerstorageoutlet.com/',
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
