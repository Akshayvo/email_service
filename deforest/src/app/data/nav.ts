import { environment } from "../../environments/environment";

export const navLinks = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "VIEW RATES",
    path: `${environment.locationName}/view-rates`,
  },
  {
    label: "RENT NOW",
    path: `${environment.locationName}/rent-now`,
  },
  {
    label: "UNIT SIZER",
    path: "/unit-sizer",
  },
  // {
  //     label: 'RESERVE UNIT',
  //     path: `${environment.locationName}/reserve-unit`,
  // },
  {
    label: "PAY RENT",
    path: "/pay-rent",
  },
  {
    label: "STORAGE TIPS",
    path: `${environment.locationName}/storage-tips`,
  },

  {
    label: "CONTACT US",
    path: "/contact-us",
  },
];
