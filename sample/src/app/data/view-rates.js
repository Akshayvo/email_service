"use strict";
exports.__esModule = true;
exports.option1 = exports.option = exports.state = exports.th = exports.viewRatesAltText = exports.dataViewRates = void 0;
var configuration_1 = require("./configuration");
exports.dataViewRates = [
    {
        p: "Sample Self Storage - North has been serving Baldwinsville, and the surrounding communities\n      with quality regular and climate controlled self storage units for nearly two decades. We have\n      the experience and commitment to modern conveniences you need to make your next storage project an easy one"
    },
    {
        p: "At Sample Self Storage - North, you'll have access to our services with an online tenant portal\n      for contactless rentals, and online payments. If you're here after hours and want to make a payment,\n      stop into the office's foyer and use our 24-hour kiosk!"
    },
    {
        p: "Our residential storage users love our convenient location and affordable rates that take the stress\n      out of their move, renovation, or seasonal de-cluttering projects. An extra closet to an extra garage's\n      worth of space makes the most out of your home's space!\n      "
    },
    {
        p: "Many local businesses in use our climate controlled storage units to save money by storing in a climate\n      controlled storage unit instead of expensive commercial real estate. We are the ideal space for your extra\n    inventory, or documents. Our 24-hour access policy is the ideal solution for your local business."
    }
];
exports.viewRatesAltText = "two rows of roll-up metal self storage unit doors inside a climate controlled self storage building";
exports.th = [
    {
        data: "Size",
        state: true
    },
    {
        data: "Rate",
        state: configuration_1.objSIMSetting.objUnitSizesSetting.blnShowRate
    },
    {
        data: 'deposit',
        state: configuration_1.objSIMSetting.objUnitSizesSetting.blnShowDeposit
    },
    {
        data: "Reserve a Unit",
        state: configuration_1.objSIMSetting.objActionSetting.blnAllowReservation
    },
    {
        data: "Move In",
        state: configuration_1.objSIMSetting.objActionSetting.blnAllowMoveIn
    },
    {
        data: "Climate Control",
        state: configuration_1.objSIMSetting.objUnitSizesSetting.blnClimateControl
    },
];
exports.state = {
    size: true,
    rate: configuration_1.objSIMSetting.objUnitSizesSetting.blnShowRate,
    deposit: configuration_1.objSIMSetting.objUnitSizesSetting.blnShowDeposit,
    reserve: configuration_1.objSIMSetting.objActionSetting.blnAllowReservation,
    moveIn: configuration_1.objSIMSetting.objActionSetting.blnAllowMoveIn,
    climateControl: configuration_1.objSIMSetting.objUnitSizesSetting.blnClimateControl
};
exports.option = [
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
exports.option1 = [
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
