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
                label: 'Commerce St',
                path: `${environment.locationName}/commerce-st`,
              },
            {
                id: '2',
                label: 'Pleasantview',
                path: `${environment.locationName}/pleasantview`,
            },
              {
                id: '3',
                label: 'Clifford North',
                path: `${environment.locationName}/clifford-north`,
            },
            {
                id: '4',
                label: 'Clifford South',
                path: `${environment.locationName}/clifford-south`,
            },
            {
                id: '5',
                label: 'Location5',
                path: `${environment.locationName}/location5`,
            },
            // {
            //     id: '6',
            //     label: 'Robertsdale',
            //     path: `${environment.locationName}/robertsdale`,
            // },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'Storage Tools',
        type: 'dropdown1',
        path: '/storage-tools',
        sublinks: [
            {
                id: '1',
                label: 'FAQ',
                path: `${environment.locationName}/frequently-asked-questions`,
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
        path: '/auctions',
        type: 'link'
    },
    {
        label: 'Testimonials',
        path: '/testimonials',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
