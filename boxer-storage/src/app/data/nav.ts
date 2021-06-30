import { environment } from '../../environments/environment';

export const navLinks = [
    {
        label: 'Home',
        path: '/',
        type: 'link'
    },
    {
        label: 'Location',
        type: 'location',
        path: `/location`,
        sublinks: [
            {
                id: '1',
                label: 'Evanston Ave Location',
                path: `${environment.locationName}/evanston-ave`,
              },
               {
                id: '2',
                label: 'Howard City Location',
                path: `${environment.locationName}/howard-city`,
              },
              {
                id: '3',
                label: 'Ionia Location',
                path: `${environment.locationName}/ionia`,
              },
               {
                id: '4',
                label: 'Alpine Location',
                path: `${environment.locationName}/alpine`,
              },
              {
                id: '5',
                label: 'Red Barn Location',
                path: `${environment.locationName}/red-barn`,
              },
              {
                id: '6',
                label: 'Wayland Westside Location',
                path: `${environment.locationName}/wayland-westside`,
              },
              {
                id: '7',
                label: 'Wayland Mill Street Location',
                path: `${environment.locationName}/wayland-mill`,
              },
              {
                id: '8',
                label: 'Wayland Southside Location',
                path: `${environment.locationName}/wayland-southside`,
              },
              {
                id: '9',
                label: 'Dutton Location',
                path: `${environment.locationName}/dutton`,
              },
              {
                id: '10',
                label: 'M-45 Location',
                path: `${environment.locationName}/m45`,
              },
              {
                id: '11',
                label: 'Otsego Location',
                path: `${environment.locationName}/otsego`,
              },
              {
                id: '12',
                label: 'Allendale Location',
                path: `${environment.locationName}/allendale`,
              },
        ]
    },
    {
        label: 'View Rates',
        type: 'view-rates',
        path: `/view-rates`,
        sublinks: [
            {
                id: '1',
                label: 'Evanston Ave Location',
                path: `${environment.locationName}/evanston-ave/view-rates`,
              },
                {
                id: '2',
                label: 'Howard City Location',
                path: `${environment.locationName}/howard-city/view-rates`,
              },
              {
                id: '3',
                label: 'Ionia Location',
                path: `${environment.locationName}/ionia/view-rates`,
              },
                 {
                id: '4',
                label: 'Alpine Location',
                path: `${environment.locationName}/alpine/view-rates`,
              },
              {
                id: '5',
                label: 'Red Barn Location',
                path: `${environment.locationName}/red-barn/view-rates`,
              },
              {
                id: '6',
                label: 'Wayland Westside Location',
                path: `${environment.locationName}/wayland-westside/view-rates`,
              },
              {
                id: '7',
                label: 'Wayland Mill Street Location',
                path: `${environment.locationName}/wayland-mill/view-rates`,
              },
              {
                id: '8',
                label: 'Wayland Southside Location',
                path: `${environment.locationName}/wayland-southside/view-rates`,
              },
              {
                id: '9',
                label: 'Dutton Location',
                path: `${environment.locationName}/dutton/view-rates`,
              },
              {
                id: '10',
                label: 'M-45 Location',
                path: `${environment.locationName}/m45/view-rates`,
              },
              {
                id: '11',
                label: 'Otsego Location',
                path: `${environment.locationName}/otsego/view-rates`,
              },
              {
                id: '12',
                label: 'Allendale Location',
                path: `${environment.locationName}/allendale/view-rates`,
              },
        ]
    },
    {
        label: 'Pay Rent',
        path: '/pay-rent',
        type: 'link'
    },
    // {
    //     label: 'Storage Tips',
    //     path: `${environment.locationName}/storage-tips`,
    //     type: 'link'
    // },
    {
        label: `FAQ's`,
        path: '/frequently-asked-questions',
        type: 'link'
    },
    {
        label: 'Contact Us',
        path: '/contact-us',
        type: 'link'
    },
];
