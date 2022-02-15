import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
        type: 'link'
    },
    {
        label: 'VIEW RATES',
        type: 'link',
        path: `${environment.locationName}/view-rates`,
    },
    {
        label: 'OUR LOCATIONS',
        type: 'dropdown',
        path: ``,
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent',
        type: 'link'
    },
    {
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`,
        type: 'link'
    },
    {
        label: 'UNIT SIZER',
        path: '/unit-sizer',
        type: 'link',
    },
    {
        label: 'CONTACT US',
        path: '/contact-us',
        type: 'link'
    },
];