import { environment } from "../../environments/environment";

export const navLinks = [
  {
    label: "HOME",
    path: "/",
    type: "link",
  },
  {
    label: "LOCATIONS",
    type: "dropdown",
    path: "/location",
    sublinks: [
      {
        id: "1",
        label: "Guardian Storage",
        path: `${environment.locationName}/guardian`,
      },
      {
        id: "2",
        label: "Access Mini Storage",
        path: `${environment.locationName}/access-mini`,
      },
    ],
  },
  // {
  //     label: 'Pay Rent',
  //     path: '/pay-rent',
  //     type: 'link'
  // },
  {
    label: "STORAGE HELP",
    type: "dropdown",
    path: "/help",
    sublinks: [
      {
        id: "1",
        label: "Storage Tips",
        path: `${environment.locationName}/storage-tips`,
      },
      {
        id: "2",
        label: "FAQ",
        path: `${environment.locationName}/frequently-asked-questions`,
      },
    ],
  },
  {
    label: "PROMOTIONS",
    path: `${environment.locationName}/promotions`,
    type: "link",
  },
  // {
  //     label: 'COMMUNITY',
  //     path: `${environment.locationName}/community`,
  //     type: 'link'
  // },
  {
    label: "CONTACT US",
    path: "/contact-us",
    type: "link",
  },
];
