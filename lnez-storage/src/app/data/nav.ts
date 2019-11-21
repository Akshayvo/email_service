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
                  label: 'Inez Storage 2',
                  path: '/location/inezstorage-2',
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
