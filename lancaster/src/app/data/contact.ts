function formatPhoneNumber(phoneNumberString) {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

export const contact = [
    {
        id: 0,
        label: 'Address:',
        data: '2271 Pageland Hwy, Lancaster, SC 29720',
        class: 'fas fa-map-marker-alt mx-2 iconColor',
        redirect: 'https://goo.gl/maps/D7u8ar7pW5rsaiR88'
    },
    {
        id: 1,
        label: 'Email:',
        data: 'selfstoragesc@gmail.com',
        class: 'fas fa-envelope mx-2 iconColor',
        redirect: 'mailto:selfstoragesc@gmail.com'
    },
    {
        id: 2,
        label: 'Phone:',
        data: formatPhoneNumber('(555) 555-5555'),
        class: 'fas fa-phone mx-2 iconColor',
        redirect: 'tel:5555555555',
    },
    {
        id: 0,
        label: 'Mailing Address:',
        data: 'P.O. Box 1466 501 N. Main St, Lancaster, SC 29720',
        class: 'fas fa-map-marker-alt mx-2 iconColor',
        redirect: 'https://goo.gl/maps/D7u8ar7pW5rsaiR88'
    },
];

export const hours = [
    
    // {
    //     label: 'Office Hours: ',
    //     data: `In Person By Appointment Only, Kiosk Access 24/7`
    // },
    {
        label: 'Access Hours: ',
        data: '24-Hours a Day 7 Days a Week'
    }
];

export const socialLinks = [
    
];


