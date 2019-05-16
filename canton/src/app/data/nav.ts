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
                  label: 'Location 2',
                  path: '/location/location2',
              },
              {
                  id: '3',
                  label: 'Location 3',
                  path: '/location/location3',
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
