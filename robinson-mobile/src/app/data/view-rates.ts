import { objSIMSetting } from './configuration';

export const dataViewRates = [
    {
      p: `Robinson Storage Box covers a large service area with quality and affordable portable storage units. Peterborough, Buckhorn, Lakefield, Omemee, and the surrounding communities all take advantage of our friendly service and competitive prices.`,
    },
    {
      p: `You won’t find an easier mobile storage option! Our no-tilt delivery service means you can have your unit delivered at your convenience, then picked up for storage at our facility or moved to your new location with minimal disruption to the belongings or equipment inside.`
    },
    {
      p: `Have questions about our service area, terms, or general information? Give our team a call, and we’ll be happy to help! If you’re ready to start making some space for your next project, submit your information request online!`
    },
];

export const viewRatesAltText = `a mobile storage unit on the back of a delivery vehicle`;

export const th = [
  {
    data: `Size`,
    state: true,
  },
  {
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate
  },
  {
    data: 'deposit',
    state: objSIMSetting.objUnitSizesSetting.blnShowDeposit
  },
  {  
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation
  },
  {
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn
  },
  {
    data: `Climate Control`,
    state: objSIMSetting.objUnitSizesSetting.blnClimateControl
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

export const rates = [
  {
      td1: 'SIZE',
      td2: 'RATE ',
  },
  {
      td1: `8'x20' Portable Storage Unit'`,
      td2: `$8 per day plus travel`
  },
  
];

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
  