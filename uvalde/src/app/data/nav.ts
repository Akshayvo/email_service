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
                label: 'AFFORDABLE STORAGE #1 - 260 N GROVE',
                path: '/location/260-n-grove',
                name: '260-n-grove'
              },
              {
                  id: '2',
                  label: 'AFFORDABLE STORAGE #2 - 201 N GROVE',
                  path: '/location/201-n-grove',
                  name: '201-n-grove'
              },
              {
                  id: '3',
                  label: 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE',
                  path: '/location/246-w-south-lane',
                  name: '246-w-south-lane'
              },
              {
                id: '4',
                label: 'AFFORDABLE STORAGE #4 - 817 S. GETTY',
                path: '/location/817-s-getty',
                name: '817-s-getty'
            },
            {
                id: '5',
                label: 'AFFORDABLE STORAGE #5 - 430 S HWY 83',
                path: '/location/430-s-hwy-83',
                name: '430-s-hwy-83'
            },
            {
                id: '6',
                label: 'AFFORDABLE STORAGE #6 - 500 E. GARDEN',
                path: '/location/500-east-garden-street',
                name: '500-east-garden-street'
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
