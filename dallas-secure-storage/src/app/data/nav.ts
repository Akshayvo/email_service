export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Locations',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'Dallas Secure Storage',
                path: '/location/dallas-secure-storage',
              },
              {
                  id: '2',
                  label: 'Godsey Secure Storage',
                  path: '/location/godsey-secure-storage',
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
        path: '/contact',
        type: 'link'
    },
];
