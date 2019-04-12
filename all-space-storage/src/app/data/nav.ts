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
                label: 'Poughkeepsie/Arlington',
                path: '/location/poughkeepsie/arlington',
                name: 'arlington',
                // innerLinks: [
                //     {
                //         id: '1',
                //         label: 'Poughkeepsie/Arlington',
                //         path: '/location/poughkeepsie/arlington',
                //         name: 'arlington',
                //     },
                //     {
                //         id: '2',
                //         label: 'Poughkeepsie/Hyde Park',
                //         path: '/location/poughkeepsie/hyde-park',
                //         name: 'hydePark',
                //     }
                // ]
              },
              {
                id: '2',
                label: 'Poughkeepsie/Hyde Park',
                path: '/location/poughkeepsie/hyde-park',
                name: 'hyde-park'
            },
              {
                  id: '3',
                  label: 'Highland',
                  path: '/location/highland',
                  name: 'Highland'
              },
              {
                  id: '4',
                  label: 'Kingston/Lake Katrine',
                  path: '/location/lake-katrine',
                  name: 'LakeKatrine'
              },
              {
                id: '5',
                label: 'Pawling',
                path: '/location/pawling',
                name: 'Pawling'
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
