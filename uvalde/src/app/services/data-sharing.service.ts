import { Injectable } from '@angular/core';
import { TrackNavigationEnd } from 'angulartics2';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  previousUrl: string;
  verificationCode: string;
  changePassword: boolean;
  navigationTo: string;
  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  isValueUpdated: boolean;
  navigateToPrevious: string;
  paymentNavigation: string;

  // locationAPIKey = {
  //   loc1: 'dzJ0OVcwSjMqM046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  //   loc2: 'dzJ0OVcwSjMqNE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  //   loc3: 'dzJ0OVcwSjMqNU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  //   loc4: 'dzJ0OVcwSjMqNk46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  //   loc5: 'dzJ0OVcwSjMqN046MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
  //   loc6: 'dzJ0OVcwSjMqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29038
  //   loc7: 'dzJ0OVcySjgqOU46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O', // 29289
  //   loc8: 'dzJ0OVczSjcqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O'  // 29378
  // };

  locationAPIKey = {                                                     // demo north
    loc1: 'PTJeOCM0VDZ4M2s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc2: 'UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc3: 'YzI+OEs0ejZqNUg6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc4: 'aDJLOGk0KzZBNng6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc5: 'PTJeOCM0VDZ4M2s6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc6: 'UDIoOEQ0YzZ2NDw6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc7: 'YzI+OEs0ejZqNUg6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O',
    loc8: 'YzI+OEs0ejZqNUg6MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O'
    // loc8: 'dzJ0OVczSjcqOE46MjJ8JTg3ODc3JCg4PWJXMHNoZGQ5a2VvY15O'  // 29378
  };

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

  period: string;

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
