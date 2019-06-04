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
                label: 'Fohl Street Storage',
                path: '/location/fohl-street-storage',
              },
              {
                  id: '2',
                  label: 'Louisville Self Storage',
                  path: '/location/louisville-self-storage',
              },
              {
                  id: '3',
                  label: 'Lincoln Street Storage',
                  path: '/location/lincoln-street-storage',
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
