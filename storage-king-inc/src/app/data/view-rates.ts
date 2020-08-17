import { objSIMSetting } from './configuration';

export const dataViewRates = [
    {
      p: `Our self storage unit selection ranges from closet-sized 5-foot-by-5-foot units that are
      ideal for some seasonal decorations, to our oversized 10-foot-by-35-foot units that are large
      enough to hold the contents of your home during an extended move. No matter your storage needs,
      we have a regular or climate controlled unit waiting for you!  `,
    },
    {
      p: `Storage King, Inc. is locally owned & operated, and we strive to exceed your customer service
      expectations every day. Take a moment to review our rates, then start your contactless move in right
      here! Not ready to move in? Reserve a unit, and claim your spot with our handy tenant portal, or call
      our offices and speak with a knowledgeable storage professional today!`
    }
];

export const viewRatesAltText = `photograph of several self storage unit buildings with square red doors`;

export const th = [
  {
    data: `Size`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn
  },
  {
    data: `Rate`,
    state: objSIMSetting.objUnitSizesSetting.blnShowRate
  },
  // {
  //   data: 'Deposit',
  //   state: objSIMSetting.objUnitSizesSetting.blnShowDeposit
  // },
  {
    data: `Reserve a Unit`,
    state: objSIMSetting.objActionSetting.blnAllowReservation
  },
  {
    data: `Move In`,
    state: objSIMSetting.objActionSetting.blnAllowMoveIn
  },
  // {
  //   data: `Climate Control`,
  //   state: objSIMSetting.objUnitSizesSetting.blnClimateControl
  // },
];


export const option =  [
  {
    description: 'Alaska',
    id: 'AK'
  },
  {
    description: 'Alabama',
    id: 'AL'
  },
  {
    description: 'Arkansas',
    id: 'AR'
  },
  {
    description: 'Arizona',
    id: 'AZ'
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
    description: 'Ohio',
    id: 'OH'
  },
  {
    description: 'Oklahoma',
    id: 'OK'
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
    description: 'Puerto Rico',
    id: 'PR'
  },
  {
    description: 'Rhode Island',
    id: 'RI'
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