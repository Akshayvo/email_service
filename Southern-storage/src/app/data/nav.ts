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
                label: 'Agricola',
                path: '/location/agricola',
                name: 'agricola'
              },
              {
                  id: '2',
                  label: 'Rocky Creek',
                  path: '/location/rocky-creek',
                  name: 'RockyCreek'
              },
              {
                  id: '3',
                  label: 'Barton',
                  path: '/location/barton',
                  name: 'barton'
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
