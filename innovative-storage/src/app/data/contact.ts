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
        data: '2181 Innovation Dr Suite 101, Marion, OH 43302',
        class: 'fas fa-map-marker-alt mx-2 iconColor',
        redirect: 'https://www.google.com/maps/place/Innovative+Storage/@40.608156,-83.0708,14z/data=!4m5!3m4!1s0x0:0x6a505ba964e4216a!8m2!3d40.6081518!4d-83.0708092?hl=en'
    },
    {
        id: 1,
        label: 'Email:',
        data: 'innovativestorageohio@gmail.com',
        class: 'fas fa-envelope mx-2 iconColor',
        redirect: 'mailto:innovativestorageohio@gmail.com'
        // redirect: 'mailto:selfstoragesc@gmail.com'
    },
    {
        id: 2,
        label: 'Phone:',
        data: formatPhoneNumber('(740) 375-5981'),
        class: 'fas fa-phone mx-2 iconColor',
        redirect: 'tel:7403755981',
        // redirect: 'tel:5555555555',
    },
    // {
    //     id: 0,
    //     label: 'Mailing Address:',
    //     data: 'P.O. Box 1466 501 N. Main St, Lancaster, SC 29720',
    //     class: 'fas fa-map-marker-alt mx-2 iconColor',
    //     redirect: 'https://goo.gl/maps/D7u8ar7pW5rsaiR88'
    // },
];

export const hours = [
    
    {
        label: 'Monday - Friday: ',
        data: `8:00AM to 4:00PM`
    },
    {
        label: 'Access Hours: ',
        data: '24 Hours a Day, 7 Days a Week'
    }
];

export const socialLinks = [
    
];


