export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Location',
        type: 'dropdown',
        sublinks: [
            {
                id: '1',
                label: 'Location 1',
                path: '/location/location1',
                name: 'Location1'
              },
              {
                  id: '2',
                  label: 'Location 2',
                  path: '/location/location2',
                  name: 'Location2'
              },
              {
                  id: '3',
                  label: 'Location 3',
                  path: '/location/location3',
                  name: 'Location3'
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
