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
                label: 'Bluegrass Storage - Filiatreau Lane',
                path: '/location/filitreau-lane',
                name: 'filitreau-lane'
              },
              {
                  id: '2',
                  label: 'Bluegrass Storage - Springfield Road',
                  path: '/location/springfield-road',
                  name: 'springfield-road'
              },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Unit Sizer',
        path: '/unit-sizer',
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
