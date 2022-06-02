import { objSIMSetting } from './configuration';

export const dataViewRates = [
    {
      p: `Frazer Township Self Storage has all of the modern conveniences to make your next self storage project a fast and easy one. We proudly serve Tarentum, East Deer and West Deer, Gibsonia, and the surrounding communities. Our facility is conveniently located on a quiet road for easy access with car, truck, or moving van for easy loading and unloading. We cater to a variety of storage self storage customers from residential to commercial and local non-profit organizations.`,
    },
    {
      p: `So whether you are looking for short term self storage while moving, or if you're searching for long-term job site storage, we're sure to have the right unit for you. Give our friendly team a call today, or you can move in online with our handy rental application!`
    },
    
];

export const viewRatesAltText = `two rows of roll-up metal self storage unit doors inside a climate controlled self storage building`;

export const MilitaryTypes = [
  {
    Description: `NA`,
    Value: 0 
  },
  {
    Description: `Active`,
    Value: `Active`
  },
  {
    Description: `Reserve`,
    Value:  `Reserve` 
  },
  {
    Description: `Veteran`,
    Value: `Veteran` 
  },
  {
    Description: `Retired`,
    Value: `Retired`
  },
  {
    Description: `Deployed`,
    Value: `Deployed` 
  },
]

export const MilitaryBranch = [
  {
    Description: `NA`,
    Value: 0 
  },
  {
    Description: `Army`,
    Value: `Army`
  },
  {
    Description: `Navy`,
    Value: `Navy` 
  },
  {
    Description: `AirForce`,
    Value: `AirForce` 
  },
  {
    Description: `Marines`,
    Value: `Marines`
  },
  {
    Description: `CoastGuard`,
    Value: `CoastGuard` 
  },
]

export const th = [
  {
    id: 'size',
    data: `Size`,
    state: true,
  },
  {
    id: 'rate',
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate
  },
  {
    id: 'deposit',
    data: 'Deposit',
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit
  },
  {  id: 'reserve',
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation
  },
  {
    id: 'move-in',
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn
  },
  // {
  //   id: 'climate-control',
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

export const option =  [
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

export const option1 =  [
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
  