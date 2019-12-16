export const contact = [
    {
        id: 0,
        label: 'Facility Address: ',
        data: '2360 Cranberry Rockland Rd, Cranberry, PA 16319',
        class: 'fas fa-map-marker-alt mr-2 iconColor',
    },
    {
        id: 1,
        label: 'Office Address: ',
        data: '2361 Cranberry-Rockland Rd, Cranberry, PA, 16319',
        class: 'fas fa-map-marker-alt mr-2 iconColor',
    },
    {
        id: 2,
        label: 'Mailing Address: ',
        data: 'P.O. Box 282, Cranberry, PA, 16319',
        class: 'fas fa-envelope mr-2 iconColor',
        // class: 'fas fa-envelope mr-2 iconcolor'
    },
    {
        id: 3,
        redirect: 'tel:8146570525',
        label: 'Phone: ',
        data: '(814) 657-0525',
        // tslint:disable-next-line: max-line-length
        altrenateContact: 'You may text <strong><a href="tel:8145163187" class="altrenateContact">814-516-3187</a></strong> for emergencies during non-business hours.',
        class: 'fas fa-phone mr-2 iconColor',
    },
    {
        id: 4,
        redirect: 'mailto:liz@cranberrystorage.com',
        label: 'Email: ',
        data: 'liz@cranberrystorage.com',
        // tslint:disable-next-line: max-line-length
        altrenateContact: 'You may also contact us via <strong><a class="altrenateContact" href="https://www.facebook.com/Cranberry-Storage-2060303874186177/" target="_blank">Facebook!</a><strong>',
        class: 'fas fa-envelope mr-2 iconColor',
    }
];

export const hours = [
    {
        heading: `Office Hours`,
        label: 'Monday to Friday: ',
        data: '8:00AM - 5:00PM'
    },
    {
        heading: 'Access Hours',
        label: '',
        data: '24 Hours a Day 7 Days a Week'
    }
];

export const socialLink = [
    {
        label: `facebook`,
        path: `https://www.facebook.com/Cranberry-Storage-2060303874186177/`,
        class: `fab fa-facebook-square`,
    }
];
