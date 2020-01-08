import { environment } from '../../environments/environment';

export let navLinks: any;

if (environment.type === 0) {
    navLinks = [
        {
            label: 'HOME',
            path: '/',
        },
        {
            label: 'VIEW RATES',
            path: '/view-rates',
        },
        {
            label: 'RESERVE UNIT',
            path: '/reserve-unit',
        },
        {
            label: 'RENT NOW',
            path: 'rent-now'
        },
        {
            label: 'PAY RENT',
            path: 'pay-rent/login'
        },
        {
            label: 'CONTACT US',
            path: 'contact-us'
        },
    ];
} else {
    if (environment.type === 1) {
        navLinks = [
            {
                label: 'HOME',
                path: '/',
            },
            {
                label: 'VIEW RATES',
                path: '/view-rates',
            },
            {
                label: 'RESERVE UNIT',
                path: '/reserve-unit',
            },
            {
                label: 'RENT NOW',
                path: 'rent-now'
            },
            {
                label: 'PAY RENT',
                path: 'pay-rent'
            },
            {
                label: 'CONTACT US',
                path: 'contact-us'
            },
        ];
    }
}
