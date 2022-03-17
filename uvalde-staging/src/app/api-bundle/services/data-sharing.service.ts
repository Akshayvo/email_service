import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

 locationAPIKey = {      
  //  loc1:'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O'      ,                                        
  loc1: 'dzJ0OVcwSjMqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  loc2: 'dzJ0OVcwSjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  loc3: 'dzJ0OVcwSjMqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  loc4: 'dzJ0OVcwSjMqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  loc5: 'dzJ0OVcwSjMqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  loc6: 'dzJ0OVczSjkqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29396
  loc7: 'dzJ0OVcySjgqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29289
  loc8: 'dzJ0OVczSjcqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O'  // 29378
  };

//  locationAPIKey = {                                                    
//     loc1: 'UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28464
//     loc2: 'XjJ7OEY0VzZHNUk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc3: 'aDJLOGk0KzZBNng6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28466
//   };


//  locationAPIKey = {                                                    
//     loc1: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28463
//     loc2: 'Mjg0NjQ6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28464
//     loc3: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc4: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc5: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc6: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc7: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc8: 'Mjg0NjU6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//   };

  paymentSuccess: boolean;
  locationName: string;
  strConfirmation: string;
  strAccessCode: string;
  facilityLocation: string;
  verificationCode: string;
  changePassword: boolean;
  navigationTo: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  isValueUpdated: boolean;
  navigateToPrevious: string;
  paymentNavigation: string;
  periodID: number;
  period: string;
  addingTenant = false;
  insuranceChoiceId: number;
  signUpForAutoPay: boolean;
  PaymentAmount: number;
  CCApprovalCode: string;
  eventName: string;
  paymentTab: string;
  showAltDetails: boolean;
  showMilitaryDetails: boolean;
  amountToPayThankYou: number;

  apiKey = '';

  MoveInData = {
    Description: '',
    MonthlyRate: 0,
    UnitTypeID: 0,
    proRateAmount: 0,
    ProrateAmtTax: 0,
    Setup: 0,
    SetupTax: 0,
    OthDeposit: 0,
    Deposit: 0,
    DepositTax: 0,
    RateTax: 0,
    TotalTaxAmount: 0,
    TotalChargesAmount: 0
  };

  ReservationData = {
    Description: '',
    MonthlyRate: 0,
    UnitTypeID: 0,
    RateTax: 0,
    formattedMoveInDate: '',
  };

  LstUnitTypes = {
    Description: '',
    ReservationFee: 0,
    ReservationFeeTax: 0,
    UnitTypeID: 0,
    MonthlyRate: 0,
    AnnualRate: 0,
    BiAnnualRate: 0,
    QuarterRate: 0,
  };

  objTenant = {
    FirstName: '',
    LastName: '',
    Phone: '',
    EmailAddress: '',
    AddressLine1: '',
    AddressLine2: '',
    City: '',
    State: '',
    ZIP: '',
    DriversLicense: ' ',
    DriversLicenseExpDate: ' ',
    DateOfBirth: ' ',
    MilitaryType: 0,
    MilitaryBranch: 0,
    MilitaryID: ' ',
    DeployedUntil: ' ',
    MilitaryDivision: ' ',
    CommandingOfficer: ' ',
    CommandingOfficerPhone: ' ',
    AlternateName: '',
    AlternatePhone: '',
    AlternateAddressLine1: '',
    AlternateAddressLine2: '',
    AlternateCity: '',
    AlternateState: '',
    AlternateZIP: ''
  };


  navLinksForComponent = {
    reservationForm: {
      next: '',
      prev: '',
    },
    confirmationData: {
      next: '',
      prev: '',
    },
    payRentForm: {
      next: '',
      prev: '',
    },
    viewRates: {
      next: '',
      prev: ''
    }

  };

  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };


  constructor() {
    this.getUnitData();
  }
  setTenantData(value: any) {
    this.objTenant = value;
  }

  getTenantData() {
    return this.objTenant;
  }

  setUnitData(value: any) {
    this.LstUnitTypes = value;
  }

  getUnitData() {
    return this.LstUnitTypes;
  }

  getAPIKey() {
    return this.apiKey;
  }

  initMyNavLinks = (componentName, myCurUrl) => {
    // console.log('TCL: DataSharingService -> initMyNavLinks -> this.navLinksForComponent', this.navLinksForComponent);
    if (this.navLinksForComponent[componentName]) {
      this.navLinksForComponent[componentName].next = myCurUrl;
      this.navLinksForComponent[componentName].prev = myCurUrl;
    }
  }

  getMyNavLinks = (componentName) => {
    return this.navLinksForComponent[componentName];
  }

  updateMyNavLink = (componentName, linkType, url) => {
    if (this.navLinksForComponent[componentName]) {
      if (this.navLinksForComponent[componentName][linkType]) {
        this.navLinksForComponent[componentName][linkType] = url;
      }
    }
  }

  setReservationData(value: any) {
    this.ReservationData.Description = value.Description;
    this.ReservationData.MonthlyRate = value.MonthlyRate;
    this.ReservationData.UnitTypeID = value.UnitTypeID;
  }

  getReservationData() {
    return this.ReservationData;
  }

  setMoveInData(value: any) {
    this.MoveInData.Description = value.Description;
    this.MoveInData.MonthlyRate = value.MonthlyRate;
    this.MoveInData.UnitTypeID = value.UnitTypeID;
  }

  getMoveInData() {
    return this.MoveInData;
  }

}
