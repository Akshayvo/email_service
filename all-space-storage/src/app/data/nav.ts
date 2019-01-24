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
                label: 'Poughkeepsie',
                path: '/location/poughkeepsie',
                name: 'Poughkeepsie'
              },
              {
                  id: '2',
                  label: 'Highland',
                  path: '/location/highland',
                  name: 'Highland'
              },
              {
                  id: '3',
                  label: 'Lake Katrine',
                  path: '/location/lake-katrine',
                  name: 'LakeKatrine'
              },
              {
                id: '4',
                label: 'Pawling',
                path: '/location/pawling',
                name: 'Pawling'
            },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/payment',
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
