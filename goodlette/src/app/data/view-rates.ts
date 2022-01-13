import { objSIMSetting } from "./configuration";

export const dataViewRates = [
  {
    p: `We are a locally owned business, and we’ve worked hard to build a reputation with our business and residential customers that the “hometown service” you receive from us is the key to building those long term relationships with our customers.`,
  },
  {
    p: `Take a moment to review the current availability and rates, then reserve or rent your unit online.  Once you’re a tenant at Goodlette Self Storage, you’ll have 24-hour access to your account. You can pay your rent online at your convenience, or sign up for automatic payments.`,
  },
  {
    p: `Whether you’re a local resident preparing for a move, or if you’re a local business owner that understands the savings of off-site storage for inventory, Goodlette Self Storage has an affordable unit for you. We look forward to meeting you!
      `,
  },
];

export const dataReserve = [
  {
    p: `Resident Manager. Few storage facilities have resident managers. But if you find one that does, give it a plus point. It makes for a safer more secure facility when there is somebody there 24 hours a day. Emergencies don’t give warnings. They can arise during off-hours. A resident manager can help.`,
  },
];

export const dataMoveIn = [
  {
    p: ` Does the facility have closed circuit TV? How well is it monitored? If somebody tries to break into your unit, will there be a video record of it? How well lit is it at night?`,
  },
];

export const dataConfirmationReserve = [
  {
    p: ` Cost. Different facilities have different size units and cost items. When comparing cost, go by cost per square foot. Unit sizes can be confusing; which one is bigger, a 5x6 unit or 4x7? Make sure you have taken all the add-ons into account. We have no application fees, no setup and processing fees, no security deposits. Your rent plus tax is all you pay. We do ask, however, that you leave your unit clean and undamaged when you finish your rental.`
  },
];

export const dataConfirmationMoveIn = [
  {
    p: ` Facility. All storage facilities are not equal. Is there a risk of flooding? How much higher is the facility relative to the adjacent road? Does it meet or exceed FEMA minimum flood elevation? Ours meets and exceeds. How strong and hurricane proof are the buildings? Ours have been here since 1985, through two direct hit hurricanes.`
  },
];

export const dataSuccessReserve = [
  {
    p: ` Access. Being near is not enough. How easy is it to get in and out of the facility, drive around, park and get to the Manager’s office or your storage unit? Check out our deceleration lane and left turn lane on Goodlette Frank Road.`
  },
];

export const viewRatesAltText = `two rows of roll-up metal self storage unit doors inside a climate controlled self storage building`;

export const th = [
  {
    data: `Size`,
    state: true,
  },
  {
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate,
  },
  // {
  //   data: 'deposit',
  //   state: objSIMSetting.objUnitSizesSetting.blnShowDeposit
  // },
  {
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation,
  },
  {
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  },
  // {
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },
];

export const state = {
  size: true,
  rate: objSIMSetting.objUnitSizesSetting.blnShowRate,
  deposit: objSIMSetting.objUnitSizesSetting.blnShowDeposit,
  reserve: objSIMSetting.objActionSetting.blnAllowReservation,
  moveIn: objSIMSetting.objActionSetting.blnAllowMoveIn,
  climateControl: objSIMSetting.objUnitSizesSetting.blnClimateControl,
};

export const option = [
  {
    description: "Alabama",
    id: "AL",
  },
  {
    description: "Alaska",
    id: "AK",
  },
  {
    description: "Alberta",
    id: "AB",
  },
  {
    description: "American Samoa",
    id: "AS",
  },
  {
    description: "Arizona",
    id: "AZ",
  },
  {
    description: "Arkansas",
    id: "AR",
  },
  {
    description: "British Columbia",
    id: "BC",
  },
  {
    description: "California",
    id: "CA",
  },
  {
    description: "Colorado",
    id: "CO",
  },
  {
    description: "Connecticut",
    id: "CT",
  },
  {
    description: "Delaware",
    id: "DE",
  },
  {
    description: "District Of Columbia",
    id: "DC",
  },
  {
    description: "Federated States Of Micronesia",
    id: "FM",
  },
  {
    description: "Florida",
    id: "FL",
  },
  {
    description: "Georgia",
    id: "GA",
  },
  {
    description: "Guam",
    id: "GU",
  },
  {
    description: "Hawaii",
    id: "HI",
  },
  {
    description: "Idaho",
    id: "ID",
  },
  {
    description: "Illinois",
    id: "IL",
  },
  {
    description: "Indiana",
    id: "IN",
  },
  {
    description: "Iowa",
    id: "IA",
  },
  {
    description: "Kansas",
    id: "KS",
  },
  {
    description: "Kentucky",
    id: "KY",
  },
  {
    description: "Louisiana",
    id: "LA",
  },
  {
    description: "Maine",
    id: "ME",
  },
  {
    description: "Manitoba",
    id: "MB",
  },
  {
    description: "Marshall Islands",
    id: "MH",
  },
  {
    description: "Maryland",
    id: "MD",
  },
  {
    description: "Massachusetts",
    id: "MA",
  },
  {
    description: "Michigan",
    id: "MI",
  },
  {
    description: "Minnesota",
    id: "MN",
  },
  {
    description: "Mississippi",
    id: "MS",
  },
  {
    description: "Missouri",
    id: "MO",
  },
  {
    description: "Montana",
    id: "MT",
  },
  {
    description: "Nebraska",
    id: "NE",
  },
  {
    description: "Nevada",
    id: "NV",
  },
  {
    description: "Newfoundland and Labrador",
    id: "NL",
  },
  {
    description: "New Brunswick",
    id: "NB",
  },
  {
    description: "New Hampshire",
    id: "NH",
  },
  {
    description: "New Jersey",
    id: "NJ",
  },
  {
    description: "New Mexico",
    id: "NM",
  },
  {
    description: "New York",
    id: "NY",
  },
  {
    description: "Northwest Territories",
    id: "NT",
  },
  {
    description: "North Carolina",
    id: "NC",
  },
  {
    description: "North Dakota",
    id: "ND",
  },
  {
    description: "Northern Mariana Islands",
    id: "MP",
  },
  {
    description: "Nova Scotia",
    id: "NS",
  },
  {
    description: "Nunavut",
    id: "NU",
  },
  {
    description: "Ohio",
    id: "OH",
  },
  {
    description: "Oklahoma",
    id: "OK",
  },
  {
    description: "Ontario",
    id: "ON",
  },
  {
    description: "Oregon",
    id: "OR",
  },
  {
    description: "Palau",
    id: "PW",
  },
  {
    description: "Pennsylvania",
    id: "PA",
  },
  {
    description: "Prince Edward Island",
    id: "PE",
  },
  {
    description: "Puerto Rico",
    id: "PR",
  },
  {
    description: "Quebec",
    id: "QC",
  },
  {
    description: "Rhode Island",
    id: "RI",
  },
  {
    description: "Saskatchewan",
    id: "SK",
  },
  {
    description: "South Carolina",
    id: "SC",
  },
  {
    description: "South Dakota",
    id: "SD",
  },
  {
    description: "Tennessee",
    id: "TN",
  },
  {
    description: "Texas",
    id: "TX",
  },
  {
    description: "Utah",
    id: "UT",
  },
  {
    description: "Vermont",
    id: "VT",
  },
  {
    description: "Virgin Islands",
    id: "VI",
  },
  {
    description: "Virginia",
    id: "VA",
  },
  {
    description: "Washington",
    id: "WA",
  },
  {
    description: "West Virginia",
    id: "WV",
  },
  {
    description: "Wisconsin",
    id: "WI",
  },
  {
    description: "Wyoming",
    id: "WY",
  },
  {
    description: "Yukon",
    id: "YT",
  },
];

export const option1 = [
  {
    description: "Alberta",
    id: "AB",
  },
  {
    description: "British Columbia",
    id: "BC",
  },
  {
    description: "Manitoba",
    id: "MB",
  },
  {
    description: "New Brunswick",
    id: "NB",
  },
  {
    description: "Newfoundland and Labrador",
    id: "NL",
  },
  {
    description: "Northwest Territories",
    id: "NT",
  },
  {
    description: "Nova Scotia",
    id: "NS",
  },
  {
    description: "Nunavut",
    id: "NU",
  },
  {
    description: "Ontario",
    id: "ON",
  },
  {
    description: "Prince Edward Island",
    id: "PE",
  },
  {
    description: "Quebec",
    id: "QC",
  },
  {
    description: "Saskatchewan",
    id: "SK",
  },
  {
    description: "Yukon",
    id: "YT",
  },
];