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
                label: 'Inez Storage',
                path: '/location/inez-storage',
              },
              {
                  id: '3',
                  label: 'Beck Road Storage',
                  path: '/location/beck-road-storage',
              },
        ]
    },
    {
        label: 'Camper Rentals',
        path: '/camper-rentals',
        type: 'link',
        // sublinks: [
        //     {
        //         path: '/camper-rentals/2018-wildwood-27REI',
        //       },
        //       {
        //           path: '/camper-rentals/2019-prime-time-tracer',
        //       },
        // ]
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
