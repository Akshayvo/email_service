export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link'
    },
    {
        label: 'LOCATION',
        type: 'dropdown',
        path: '/location',
        sublinks: [
            {
                id: '1',
                label: 'All Space Storage',
                path: 'https://www.allspaceministorage.com/',
              },
              {
                  id: '2',
                  label: 'All Portable Easy Storage',
                  path: 'https://www.apesstorage.com/',
              },
        ]
    },
    {
        label: 'VIEW RATES',
        path: '/view-rates',
        type: 'link'
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'STORAGE TIPS',
        path: '/storage-tips',
        type: 'link'
    },
    {
        label: 'CONTACT US',
        path: '/contact-us',
        type: 'link'
    },
];
