import { environment } from '../../environments/environment';

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
                label: 'Foley',
                path: `${environment.locationName}/foley`,
              },
            {
                id: '2',
                label: 'Silverhill',
                path: `${environment.locationName}/silverhill`,
            },
              {
                id: '3',
                label: 'Barnwell',
                path: `${environment.locationName}/barnwell`,
            },
            {
                id: '4',
                label: 'Belforest',
                path: `${environment.locationName}/belforest`,
            },
            {
                id: '5',
                label: 'Fairhope',
                path: `${environment.locationName}/fairhope`,
            },
            {
                id: '6',
                label: 'Robertsdale',
                path: `${environment.locationName}/robertsdale`,
            },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Storage Tools',
        type: 'dropdown',
        path: '/storage-tools',
        sublinks: [
            {
                id: '1',
                label: 'FAQ',
                path: `${environment.locationName}/faq`,
              },
            {
                id: '2',
                label: 'Trailer Rental',
                path: `${environment.locationName}/trailer-rental`,
            },
              {
                id: '3',
                label: 'Clifford South RV/Trailer Information',
                path: `${environment.locationName}/trailer-info`,
            },
            {
                id: '4',
                label: 'Specials & Discounts',
                path: `${environment.locationName}/discounts`,
            },
            
        ]
    },
    {
        label: 'Auctions',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Testimonials',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
