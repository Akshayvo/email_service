import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  locationAPIKey = {
    loc1: 'XjJ7MEY2VzNHMUk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 20631
    loc2: 'XjJ7OUYzVzJHN0k6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29327
    loc3: 'XjJ7MEY2VzNHM0k6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 20633
  };

//  locationAPIKey = {                                                     // demo north
//     loc1: 'dzJ0OVc0SjYqMk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
//     loc2: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
//     loc3: 'Mjg0NjM6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
//     loc4: '',
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
