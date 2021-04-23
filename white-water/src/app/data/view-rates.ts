import { objSIMSetting } from './configuration';

export const dataViewRates = [
    {
      p: `Look on the Reserve Unit tab, call the office or stop in to make sure we have a unit available for you or if someone is in the process of moving out. Bring your driver's license. We will not rent to someone that we don't have required identification from to aid in the security of all our tenants,`,
    },
    {
      p: `If you're not sure what size unit you need and want to take a look at a couple of different size units to make sure you get the right-sized unit ask the manager for the keys and go out and take a look. After you decide come back to the office and we'll get you signed up. We also have the Unit Sizer tab that will give you some guidelines.`
    },
   {
     p: `Sign a lease agreement and pay by check, cash, or credit card. We accept Visa, MasterCard, and Discover. We pro-rate the month you move in but we do not pro-rate when you move out. We give you two keys for the cylinder lock and you can provide your own padlock in addition, if you wish. The cylinder lock is spring-loaded so you have to push in on the key and turn to open it and then pull the cylinder out. If you wish we can put you on autopay where we will charge your credit card on the first of the month; otherwise, you have to pay monthly by stopping in or setting up your account on this website to pay online. Autopay provides you with the convenience of knowing that your rent is paid on time and the assurance of avoiding any late fees.`
   },
   {
     p: `Move your items in and you're done.`
   },
   {
     p: `Time to move out? We ask that you give us a 10-day notice prior to moving out. You must fill out a move-out form to verify when you are moving out and to assure us that we send your deposit to the correct address. In addition, you must return the two keys and sweep the unit clean when you move out to get your full deposit back. It can take up to two weeks for us to process your deposit refund.`
   }
];

export const viewRatesAltText = `two rows of roll-up metal self storage unit doors inside a climate controlled self storage building`;

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
    data: 'Required Deposit',
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
  