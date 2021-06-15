import { objSIMSetting } from './configuration';

export const dataViewRates = [
  {
    p: `Whether you’re a homeowner or renter looking to clean out that garage, or if you’re a growing business that recognizes the savings storing your excess inventory in a storage unit, Madison Verona Self Storage has a unit for you. Our climate controlled units offer superior protection from the elements for documents and equipment, and our vehicle parking space mean you can reclaim that space in your lawn. Store your boat, recreational vehicle, or trailer with us during the off season!`,
  },
  {
    p: `Start your next storage project today by reviewing our rates and current inventory, then renting your unit online in minutes or stopping by to use our 24-hour rental kiosk! Still have some questions? Give our friendly management team a call! We can’t wait to meet you!`
  }
];

export const viewRatesAltText = `two rows of roll-up metal self storage unit doors inside a climate controlled self storage building`;

export const th = [
  {
    id: `size`,
    data: `Size`,
    state: true,
  },
  {
    id: `door-size`,
    data: `Door Size`,
    state: true

  },
  {
    id: `rate`,
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate
  },
  
  {
    id: `setup-fee`,
    data: 'Setup Fee',
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit
  },
  {
    id: `reserve`,
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation
  },
  {
    id: `move-in`,
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn
  },
  // {
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },

];

export const doorSize = {
  //unitId:doorsize
  32: ` 9' x 12'`,
  31: `9' x 9'`,
  30: `10' x 9'`,
  27: `3'8" x 7'`,
  26: `8'8" x 7'`,
  25: `3'8" x 7'`,
  19: `10' x 9'`,
  18: `9' x 9'`,
  17: `8'8" x 7'`,
  16: `8'8" x 7'`,
  15: `3'8" x 7'`,
  14: `3'8" x 7'`,
  13: `8'8" x 7'`,
  12: `9' x 9'`,
  11: `9' x 9'`,
  10: `9' x 9'`,
  8: `11' x 10'6"`,
  7: `9' x 8'`,
  6: `9' x 8'`,
  5: `9' x 8'`,
  4: `9' x 12'`,
  3: `11' x 9'`,
  2: `9' x 8'`,
  1: `11' x 12'`,

}

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
    description: 'Alabama',
    id: 'AL'
  },
  {
    description: 'Alaska',
    id: 'AK'
  },
  {
    description: 'Alberta',
    id: 'AB'
  },
  {
    description: 'American Samoa',
    id: 'AS'
  },
  {
    description: 'Arizona',
    id: 'AZ'
  },
  {
    description: 'Arkansas',
    id: 'AR'
  },
  {
    description: 'British Columbia',
    id: 'BC'
  },
  {
    description: 'California',
    id: 'CA'
  },
  {
    description: 'Colorado',
    id: 'CO'
  },
  {
    description: 'Connecticut',
    id: 'CT'
  },
  {
    description: 'Delaware',
    id: 'DE'
  },
  {
    description: 'District Of Columbia',
    id: 'DC'
  },
  {
    description: 'Federated States Of Micronesia',
    id: 'FM'
  },
  {
    description: 'Florida',
    id: 'FL'
  },
  {
    description: 'Georgia',
    id: 'GA'
  },
  {
    description: 'Guam',
    id: 'GU'
  },
  {
    description: 'Hawaii',
    id: 'HI'
  },
  {
    description: 'Idaho',
    id: 'ID'
  },
  {
    description: 'Illinois',
    id: 'IL'
  },
  {
    description: 'Indiana',
    id: 'IN'
  },
  {
    description: 'Iowa',
    id: 'IA'
  },
  {
    description: 'Kansas',
    id: 'KS'
  },
  {
    description: 'Kentucky',
    id: 'KY'
  },
  {
    description: 'Louisiana',
    id: 'LA'
  },
  {
    description: 'Maine',
    id: 'ME'
  },
  {
    description: 'Manitoba',
    id: 'MB'
  },
  {
    description: 'Marshall Islands',
    id: 'MH'
  },
  {
    description: 'Maryland',
    id: 'MD'
  },
  {
    description: 'Massachusetts',
    id: 'MA'
  },
  {
    description: 'Michigan',
    id: 'MI'
  },
  {
    description: 'Minnesota',
    id: 'MN'
  },
  {
    description: 'Mississippi',
    id: 'MS'
  },
  {
    description: 'Missouri',
    id: 'MO'
  },
  {
    description: 'Montana',
    id: 'MT'
  },
  {
    description: 'Nebraska',
    id: 'NE'
  },
  {
    description: 'Nevada',
    id: 'NV'
  },
  {
    description: 'Newfoundland and Labrador',
    id: 'NL'
  },
  {
    description: 'New Brunswick',
    id: 'NB'
  },
  {
    description: 'New Hampshire',
    id: 'NH'
  },
  {
    description: 'New Jersey',
    id: 'NJ'
  },
  {
    description: 'New Mexico',
    id: 'NM'
  },
  {
    description: 'New York',
    id: 'NY'
  },
  {
    description: 'Northwest Territories',
    id: 'NT'
  },
  {
    description: 'North Carolina',
    id: 'NC'
  },
  {
    description: 'North Dakota',
    id: 'ND'
  },
  {
    description: 'Northern Mariana Islands',
    id: 'MP'
  },
  {
    description: 'Nova Scotia',
    id: 'NS'
  },
  {
    description: 'Nunavut',
    id: 'NU'
  },
  {
    description: 'Ohio',
    id: 'OH'
  },
  {
    description: 'Oklahoma',
    id: 'OK'
  },
  {
    description: 'Ontario',
    id: 'ON'
  },
  {
    description: 'Oregon',
    id: 'OR'
  },
  {
    description: 'Palau',
    id: 'PW'
  },
  {
    description: 'Pennsylvania',
    id: 'PA'
  },
  {
    description: 'Prince Edward Island',
    id: 'PE'
  },
  {
    description: 'Puerto Rico',
    id: 'PR'
  },
  {
    description: 'Quebec',
    id: 'QC'
  },
  {
    description: 'Rhode Island',
    id: 'RI'
  },
  {
    description: 'Saskatchewan',
    id: 'SK'
  },
  {
    description: 'South Carolina',
    id: 'SC'
  },
  {
    description: 'South Dakota',
    id: 'SD'
  },
  {
    description: 'Tennessee',
    id: 'TN'
  },
  {
    description: 'Texas',
    id: 'TX'
  },
  {
    description: 'Utah',
    id: 'UT'
  },
  {
    description: 'Vermont',
    id: 'VT'
  },
  {
    description: 'Virgin Islands',
    id: 'VI'
  },
  {
    description: 'Virginia',
    id: 'VA'
  },
  {
    description: 'Washington',
    id: 'WA'
  },
  {
    description: 'West Virginia',
    id: 'WV'
  },
  {
    description: 'Wisconsin',
    id: 'WI'
  },
  {
    description: 'Wyoming',
    id: 'WY'
  },
  {
    description: 'Yukon',
    id: 'YT'
  },
];

export const option1 = [
  {
    description: 'Alberta',
    id: 'AB'
  },
  {
    description: 'British Columbia',
    id: 'BC'
  },
  {
    description: 'Manitoba',
    id: 'MB'
  },
  {
    description: 'New Brunswick',
    id: 'NB'
  },
  {
    description: 'Newfoundland and Labrador',
    id: 'NL'
  },
  {
    description: 'Northwest Territories',
    id: 'NT'
  },
  {
    description: 'Nova Scotia',
    id: 'NS'
  },
  {
    description: 'Nunavut',
    id: 'NU'
  },
  {
    description: 'Ontario',
    id: 'ON'
  },
  {
    description: 'Prince Edward Island',
    id: 'PE'
  },
  {
    description: 'Quebec',
    id: 'QC'
  },
  {
    description: 'Saskatchewan',
    id: 'SK'
  },
  {
    description: 'Yukon',
    id: 'YT'
  },
];
