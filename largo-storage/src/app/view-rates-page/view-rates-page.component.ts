import { Component, OnInit, OnDestroy } from '@angular/core';


import { Subscription } from 'rxjs';
import { MoveInService } from '../services/moveIn.service';
import { objCharges } from '../models/movein';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { FetchDataService } from '../services/fetch-data.service';
import { th } from '../data/view-rates';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-view-rates-page',
  templateUrl: './view-rates-page.component.html',
  styleUrls: ['./view-rates-page.component.scss']
})
export class ViewRatesPageComponent implements OnInit, OnDestroy {

  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  DescriptionVR: string;
  MonthlyRateVR: number;
  unitTypeIdVR: number;
  ProrateAmt: any;
  Deposit: any;
  openComponent = false;
  showMoveIn = false;
  
  curStage = 0;
  DepositTax: number;
  Rate: number;
  RateTax: number;
  ProrateAmtTax: number;
  OthDeposit: number;
  Setup: number;
  SetupTax: number;
  showLoader = false;
  defaultTotalChargesAmount: number;
  defaultTotalTaxAmount: number;
  defaultClimateString = "-"

  clickedMoveIn = false;

  showPaymentForMoveIn = false;
  showPaymentForReserve = false;
  objCharges: objCharges;
  th: any;

  private isUnsubscribe$: Subscription;
  constructor(
    private getMoveinChargesService: MoveInService,
    private fetchDataService: FetchDataService,
    private router: Router,
    private dataSharingService: DataSharingService,
  ) {
    
   }

 


  ngOnInit() {
    this.getData();
    this.fetchThData();
  }

  public fetchThData() {
    this.th = th;
  }

  public navigate(location: any, data) {
    this.dataSharingService.setReservationData(data);
    this.router.navigate([location]);    
    
  }

  // handleClick(unitDescription: any, monthlyRate: any, unitTypeId: number) {
  //   this.curStage = 1;
  //   this.DescriptionVR = unitDescription;
  //   this.MonthlyRateVR = monthlyRate;
  //   this.unitTypeIdVR = unitTypeId;
  //   this.clickedMoveIn = true;
  //   this.showPaymentForReserve = true;
  // }

  getMoveInCharges(description: any, monthlyRate: any, intUnitTypeID: any) {
    this.showLoader = true;
    this.getMoveinChargesService.getMoveInCharges({
      intUnitTypeID
    }).subscribe(result => {
      this.showLoader = false;
      const {objCharges: { 
        ProrateAmt = 0, 
        Deposit = 0, 
        DepositTax = 0,
        Rate = 0,
        RateTax= 0,
        ProrateTax = 0,
        OthDeposit = 0,
        Setup = 0,
        SetupTax = 0,
        TotalTaxAmount = 0,
        TotalChargesAmount = 0,
      }} = result;
      this.ProrateAmt = ProrateAmt;
      this.Deposit = Deposit;
      this.DepositTax = DepositTax;
      this.Rate = Rate;
      this.RateTax = RateTax;
      this.ProrateAmtTax = ProrateTax;
      this.OthDeposit = OthDeposit;
      this.Setup = Setup;
      this.SetupTax = SetupTax;
      this.defaultTotalTaxAmount = TotalTaxAmount;
      this.defaultTotalChargesAmount = TotalChargesAmount;
      
      this.showPaymentForMoveIn = true;
        console.log(this.objCharges, result);
        
        console.log('TCL: ViewRatesComponent -> getMoveInCharges -> this.ProrateAmt', this.ProrateAmt, this.Deposit);
        this.DescriptionVR = description;
        this.MonthlyRateVR = monthlyRate;
        this.unitTypeIdVR = intUnitTypeID;
        this.curStage = 2;
      }, err => {
        console.error('Error while fetching moveIn Charges', err);
      });
  }

  getData() {
  this.isUnsubscribe$ = this.fetchDataService.getData( )
    .subscribe(unitTypesResponse => {
      this.showTable =  true;
      this.LstUnitTypes = unitTypesResponse.lstUnitTypes;            
    });
  }

  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}
