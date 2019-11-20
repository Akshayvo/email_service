import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  navigateToReserve: boolean;
  navigateToMoveIn: boolean;
  isValueUpdated: boolean;


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
    MonthlyRate: 0,
    ReservationFee: 0,
    ReservationFeeTax: 0,
    UnitTypeID: 0,
  }

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
  }


  MoveIn = {
    dteMoveIn: '',
    intUnitTypeID: 0,
  };

  period: string;

constructor() {
 this.getUnitData();
  
}
  setTenantData(value) {
    this.objTenant = value;
  }

  getTenantData() {
    return this.objTenant;
  }

  setUnitData(value) {
    this.LstUnitTypes = value;
  }

  getUnitData() {
    console.log("Unit data from service", this.LstUnitTypes);
    return this.LstUnitTypes;
  }


  setReservationData(value) {
    this.ReservationData.Description  = value.Description;
    this.ReservationData.MonthlyRate = value.MonthlyRate;
    this.ReservationData.UnitTypeID = value.UnitTypeID;    
  }

  getReservationData() {
    return this.ReservationData;
  }

  setMoveInData(value) {
    this.MoveInData.Description  = value.Description;
    this.MoveInData.MonthlyRate = value.MonthlyRate;
    this.MoveInData.UnitTypeID = value.UnitTypeID;
  }

  getMoveInData() {
    return this.MoveInData;
  }

}
