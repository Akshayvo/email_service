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
                label: 'Movin\' On Storage',
                path: '/location/movin-on-storage',
              },
              {
                  id: '2',
                  label: 'Shaler Self Storage',
                  path: '/location/shaler-self',
              },
              {
                  id: '3',
                  label: 'Natrona Heights Self Storage',
                  path: '/location/natrona-heights-self',
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
