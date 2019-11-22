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
                  label: 'Beck Road Self Storage',
                  path: '/location/inezstorage-2',
              },
        ]
    },
    {
        label: 'Rv Rentals',
        path: '/rv-rentals',
        type: 'link'
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
