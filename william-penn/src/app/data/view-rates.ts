import { objSIMSetting } from "./configuration";

export const dataViewRates = [
  {
    p: `William Penn Self Storage provides affordable self storage services to New Alexandria, Greensburg, 
        Saltsburg, Delmont, and the surrounding communities. Our brand new self storage units are the perfect 
        solution for your next move, renovation, or other storage needs. Our residential users find our low prices, 
        24-hour access, and friendly service make cleaning out that garage, attic, or basement an easier project. 
        Local business owners find our climate controlled units are the perfect solution for equipment and document 
        storage where a little extra protection from the elements is a must.`,
  },
  {
    p: `Still have questions about your storage needs or the services we offer? Give us a call, or use our contact 
        form to reach out! One of our friendly self storage professionals will be happy to assist you. You can also 
        go right ahead and begin your contactless rental through our website. Just review the unit rates and availability, 
        and click Move In when you’re ready.`,
  },
];

export const viewRatesAltText = `an open self storage unit revealing household belongings packed neatly on shelves`;


export const MilitaryTypes = [
  {
    Description: `NA`,
    Value: 0 
  },
  {
    Description: `Active`,
    Value: 1
  },
  {
    Description: `Reserve`,
    Value: 2 
  },
  {
    Description: `Veteran`,
    Value: 3 
  },
  {
    Description: `Retired`,
    Value: 4
  },
  {
    Description: `Deployed`,
    Value: 5 
  },
]

export const MilitaryBranch = [
  {
    Description: `NA`,
    Value: 0 
  },
  {
    Description: `Army`,
    Value: 1
  },
  {
    Description: `Navy`,
    Value: 2 
  },
  {
    Description: `AirForce`,
    Value: 3 
  },
  {
    Description: `Marines`,
    Value: 4
  },
  {
    Description: `CoastGuard`,
    Value: 5 
  },
]




export const th = [
  {
    id: `size`,
    data: `Size`,
    state: true,
  },
  {
    id: `monthly-rate`,
    data: `Monthly Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate,
  },
  {
    id: `deposit`,
    data: "Deposit",
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit,
  },
  {
    id: `reserve`,
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation,
  },
  {
    id: `move-in`,
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn,
  },
  // {
  //   id: `waiting-list`,
  //   data:`Join Our Waiting List`,
  //   state:true,
  // },  
  {
    id:`climate-controls`,
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
