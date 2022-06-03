import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  paymentSuccess: boolean;
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
  showAltDetails: boolean;
  showMilitaryDetails: boolean;
  amountToPayThankYou: number;

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
    DriversLicense: ' ',
    DriversLicenseExpDate: ' ',
    vehicleMake: ' ',
    vehicleModel: ' ',
    vehicleYear: ' ',
    licensePlate: ' ',
    vehicleVIN: ' ',
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

}
