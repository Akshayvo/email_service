import { environment } from "../../environments/environment";

export const navLinks = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "VIEW RATES",
    path: `new-york/baldwinsville/view-rates`,
    //customer wanted this url specifically
    // if in case reserve button is added please check the navigate function
  },
  // {
  //     label: 'RENT NOW',
  //     path: `${environment.locationName}/rent-now`,
  // },
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
    label: "UNIT SIZER",
    path: "/unit-sizer",
  },
  {
    label: "CONTACT US",
    path: "/contact-us",
  },
];
