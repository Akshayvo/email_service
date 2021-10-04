import { objSIMSetting } from "./configuration";

export const dataViewRates = [
  {
    p: `Review our sizes and monthly rates in both regular self storage units and our climate-controlled variety, then give our friendly management team a call, and we’ll be more than happy to take your reservation! We are open during the final stage of construction!`,
  },
  {
    p: `Still not sure what sized unit will suit your home, business, or parking needs best? Check out our unit sizer page to find charts that show all of the sizes with descriptions of what contents are best suited for each type.`,
  },
  // {
  //   p: `Our residential storage users love our convenient location and affordable rates that take the stress
  //   out of their move, renovation, or seasonal de-cluttering projects. An extra closet to an extra garage's
  //   worth of space makes the most out of your home's space!
  //   `
  // },
  // {
  //   p: `Many local businesses in use our climate controlled storage units to save money by storing in a climate
  //   controlled storage unit instead of expensive commercial real estate. We are the ideal space for your extra
  // inventory, or documents. Our 24-hour access policy is the ideal solution for your local business.`
  // }
];

export const viewRatesAltText = `the corner of a single story self storage building`;

export const MilitaryTypes = [
  {
    Description: `NA`,
    Value: 0,
  },
  {
    Description: `Active`,
    Value: 1,
  },
  {
    Description: `Reserve`,
    Value: 2,
  },
  {
    Description: `Veteran`,
    Value: 3,
  },
  {
    Description: `Retired`,
    Value: 4,
  },
  {
    Description: `Deployed`,
    Value: 5,
  },
];

export const newUnitTypes = [
  { type: "5x5", rate: "$50" },
  { type: "5x10", rate: "$80" },
  { type: "10x10", rate: "$110" },
  { type: "10x15", rate: "$125" },
  { type: "10x20", rate: "$170" },
  { type: "10x25", rate: "$190" },
  { type: "10x30", rate: "$220" },
  { type: "11x25", rate: "$205" },
  { type: "12x30", rate: "$240" },
];

export const newUnitTypes1 = [
  { type: "5x10", rate: "$50" },
  { type: "10x10", rate: "$85" },
  { type: "10x15", rate: "$95" },
  { type: "10x20", rate: "$115" },
  { type: "10x25", rate: "$125" },
  { type: "10x30", rate: "$135" },
  { type: "11x10", rate: "$95" },
  { type: "11x30", rate: "$165" },
  { type: "12x20", rate: "$130" },
  { type: "12x25", rate: "$165" },
  { type: "12x30", rate: "$200" },
  { type: "12x35", rate: "$230" },
  { type: "12x40", rate: "$265" },
  { type: "12x45", rate: "$295" },
];

export const MilitaryBranch = [
  {
    Description: `NA`,
    Value: 0,
  },
  {
    Description: `Army`,
    Value: 1,
  },
  {
    Description: `Navy`,
    Value: 2,
  },
  {
    Description: `AirForce`,
    Value: 3,
  },
  {
    Description: `Marines`,
    Value: 4,
  },
  {
    Description: `CoastGuard`,
    Value: 5,
  },
];

export const th = [
  {
    id: "size",
    data: `Size`,
    state: true,
  },
  {
    id: "rate",
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate,
  },
  {
    id: "deposit",
    data: "Deposit",
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit,
  },
  {
    id: "reserve",
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation,
  },
  {
    id: "move-in",
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  },
  // {
  //   id: 'climate-control',
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },
];
export const thtempcontrolled = [
  {
    id: "size",
    data: `Size`,
    state: true,
  },
  {
    id: "rate",
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate,
  },
  {
    id: "deposit",
    data: "Deposit",
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit,
  },
  {
    id: "reserve",
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation,
  },
  // {
  //   id: "move-in",
  //   data: `Move In`,
  //   state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  // },
  // {
  //   id: 'climate-control',
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },
];
export const thoversized = [
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
  // {
  //   data: `Contact Us`,
  //   state: objSIMSetting.objActionSetting.blnAllowReservation
  // },
  {
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  },
  // {
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },
];
export const th1 = [
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
  // {
  //   data: `Contact Us`,
  //   state: objSIMSetting.objActionSetting.blnAllowReservation
  // },
  // {
  //   data: `Move In`,
  //   state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  // },
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
