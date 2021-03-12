import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  locationAPIKey = {
    loc1: 'dzF0NFcwSjAqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 14005 foley
    loc2: 'dzJ0MFc3SjYqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 20767 silverhill
    loc3: 'dzJ0MFc3SjYqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 20766 barnwell
    loc4: 'dzJ0N1c0SjUqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 27456 belforest
    loc5: 'UDIoN0Q0YzV2Nzw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 27457 Fairhope
    loc6: 'UDIoMUQyYzV2Nzw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 21257 robertsdale
  };

//  locationAPIKey = {                                                     // demo north
//     loc1: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',   // 28463
//     loc2: 'UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28464
//     loc3: 'XjJ7OEY0VzZHNUk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28465
//     loc4: 'aDJLOGk0KzZBNng6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28466
//     loc5: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',   // 28463
//     loc6: 'UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',  // 28464
//   };

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
