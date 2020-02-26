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
                label: '260 N Grove St Location',
                path: '/location/260-n-grove',
                name: '260-n-grove'
              },
              {
                  id: '2',
                  label: '201 N Grove St Location',
                  path: '/location/201-n-grove',
                  name: '201-n-grove'
              },
              {
                  id: '3',
                  label: '246 W South Lane Location',
                  path: '/location/246-w-south-lane',
                  name: '246-w-south-lane'
              },
              {
                id: '4',
                label: '817 S Getty St Location',
                path: '/location/817-s-getty',
                name: '817-s-getty'
            },
            {
                id: '5',
                label: '430 S Hwy 83 Location',
                path: '/location/430-s-hwy-83',
                name: '430-s-hwy-83'
            },
            {
                id: '6',
                label: '500 East Garden Street Location',
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
