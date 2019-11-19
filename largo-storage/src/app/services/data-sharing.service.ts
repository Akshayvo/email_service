import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

navigateToReservation: true;
navigateToMoveIn: false;

  MoveInData = {
    DescriptionVR: '',
    MonthlyRateVR: 0,
    unitTypeIdVR: 0,
    proRateAmount: 0,
    ProrateAmtTax: 0,
    Setup: 0,
    SetupTax: 0,
    OthDeposit: 0,
    Deposit: 0,
    DepositTax: 0,
    RateTax: 0
  };

  ReservationData = {
    DescriptionVR: '',
    MonthlyRateVR: 0,
    unitTypeIdVR: 0,
    RateTax: 0,
    formattedMoveInDate: '',
  };

  constructor() { 
  
  }

  setReservationData(value) {
    this.ReservationData = value;
    this.ReservationData.DescriptionVR  = value.Description;
    this.ReservationData.MonthlyRateVR = value.MonthlyRate;
    this.ReservationData.unitTypeIdVR = value.UnitTypeID;    
  }

  getReservationData() {
    return this.ReservationData;
  }

  setMoveInData(value) {
    this.MoveInData = value;
    this.MoveInData.DescriptionVR  = value.Description;
    this.MoveInData.MonthlyRateVR = value.MonthlyRate;
    this.MoveInData.unitTypeIdVR = value.UnitTypeID;
  }

  getMoveInData() {
    return this.MoveInData;
  }

}
