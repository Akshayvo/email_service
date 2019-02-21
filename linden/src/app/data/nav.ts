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
                label: 'Linden Self Storage',
                path: '/location/linden-storage',
              },
              {
                  id: '2',
                  label: 'Macedon Storage',
                  path: '/location/macedon-storage',
              },
            //   {
            //       id: '3',
            //       label: 'Natrona Heights Self Storage',
            //       path: '/location/natrona-heights-self',
            //   },
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
