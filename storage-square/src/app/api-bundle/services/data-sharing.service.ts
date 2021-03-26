import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  locationAPIKey = {
    loc1: 'bTJUOW4zTDhbN1s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29387
    loc2: 'bTJUOW4zTDhbOFs6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29388
    // loc3: 'XjF7N0YzVzZHMEk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 17360
    // loc4: 'XjF7NUY0VzhHOUk6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 15489
  };

  // locationAPIKey = {
  //   loc1: 'bTJUOG42TDRbM1s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 28463
  //   loc2: 'bTJUOG42TDRbNFs6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 28464
  // };

  strTenantToken: string;
  strTempTenantToken: string;
  verificationCode: string;
  navigateToPrevious: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  isValueUpdated: boolean;
  changePassword: boolean;
  showLogin: boolean;
  insuranceChoiceId: number;
  periodID: number;
  strAccessCode: string;
  strConfirmation: string;
  addingTenant = false;
  period: string;
  apiKey = '';
  paymentNavigation: string;
  isDataUpdated: boolean;
  isDataSaved: boolean;
  PaymentAmount: number;
  CCApprovalCode: string;
  eventName: string;
  signUpForAutoPay: boolean;
  facilityLocation: string;

  cardDetailsObject = {
    CCNumber: '',
    CCBillingAccountName: '',
    CCExpirationMonth: '',
    CCExpirationYear: '',
    CCBillingAddress: '',
    CCBillingZIP: '',
  };


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
    this.ReservationData.Description  = value.Description;
    this.ReservationData.MonthlyRate = value.MonthlyRate;
    this.ReservationData.UnitTypeID = value.UnitTypeID;
  }

  getReservationData() {
    return this.ReservationData;
  }

  setMoveInData(value: any) {
    this.MoveInData.Description  = value.Description;
    this.MoveInData.MonthlyRate = value.MonthlyRate;
    this.MoveInData.UnitTypeID = value.UnitTypeID;
  }

  getMoveInData() {
    return this.MoveInData;
  }
  getAPIKey() {
    return this.apiKey;
  }

}
