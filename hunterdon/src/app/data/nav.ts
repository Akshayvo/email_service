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
                label: 'Hunterdon Storage at Ringoes',
                path: '/location/hunterdon-storage-ringoes',
                name: 'hunterdon-storage-ringoes'
              },
              {
                  id: '2',
                  label: 'Hunterdon Storage I',
                  path: '/location/hunterdon-storage-1',
                  name: 'hunterdon-storage-1'
              },
              {
                id: '3',
                label: 'Hunterdon Storage II',
                path: '/location/hunterdon-storage-2',
                name: 'hunterdon-storage-2'
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
