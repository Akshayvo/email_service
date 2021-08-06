import { objSIMSetting } from "./configuration";

export const dataViewRates = [
  {
    p: `We offer a large number of unit sizes for every storage project from storing personal belongings off season to preparing for a large move or relocating the contents of your garage or attic to free up space around the home. Not sure what size you need? Give our friendly staff a call! We’d be happy to help assess your storage project needs.`,
  },
  {
    p: `Self storage isn’t just for moves and renovations. Smart business owners know they can save money using an off-site storage unit instead of taking up valuable commercial square footage for equipment, documents, supplies, and inventory. We cater to a number of businesses who enjoy 24 hour access to their equipment and belongings.`,
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

export const viewRatesAltText = `a two story self storage building with staircase and well-lit walkways`;

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
  // {
  //   id: "reserve",
  //   data: `Reserve a Unit`,
  //   state: objSIMSetting.objActionSetting.blnAllowReservation,
  // },
  {
    id: "move-in",
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  },
  {
    id: "climate-control",
    data: `Climate Control`,
    state: objSIMSetting.objUnitSizesSetting.blnClimateControl,
  },
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
