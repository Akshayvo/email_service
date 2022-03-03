import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'HOME',
        path: '/',
    },
    {
        label: 'VIEW RATES',
        path: `${environment.locationName}/view-rates`,
    },
    {
        label: 'PAY RENT',
        path: '/pay-rent'
    },
    {
        label: 'UNIT SIZER',
        path: 'unit-sizer'
    },
    {
        label: 'STORAGE TIPS',
        path: `${environment.locationName}/storage-tips`,
    },
    {
        label: 'CONTACT US',
        path: 'contact-us'
    },
];
