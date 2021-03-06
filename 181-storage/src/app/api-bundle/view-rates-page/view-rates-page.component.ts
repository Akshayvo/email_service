import { Component, OnInit, OnDestroy, ElementRef, HostListener, } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoveInService } from '../services/moveIn.service';
import { ObjCharges } from '../models/movein';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { FetchDataService } from '../services/fetch-data.service';
import { th } from '../../data/view-rates';
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

  descriptionVR: string;
  monthlyRateVR: number;
  unitTypeIdVR: number;
  ProrateAmt: any;
  deposit: any;
  openComponent = false;
  showMoveIn = false;
  curStage = 0;
  depositTax: number;
  rate: number;
  rateTax: number;
  prorateAmtTax: number;
  prorateAmt: number;
  othDeposit: number;
  setup: number;
  setupTax: number;
  showLoader = false;
  defaultTotalChargesAmount: number;
  defaultTotalTaxAmount: number;
  defaultClimateString = ' ';

  showPaymentForMoveIn = false;
  showPaymentForReserve = false;
  objCharges: ObjCharges;
  th: any;
  tenant: any;
  text = false;

  private getDataSubscribe$: Subscription;
  constructor(
    private getMoveinChargesService: MoveInService,
    private fetchDataService: FetchDataService,
    private router: Router,
    private dataSharingService: DataSharingService,
    private eRef: ElementRef
  ) {
   }


  ngOnInit() {
    this.getData();
    this.fetchThData();
  }

  public fetchThData() {
    this.th = th;
  }


  public navigate(location: any, unitData: any) {
    this.dataSharingService.setReservationData(unitData);
    this.router.navigate([location]);
    this.dataSharingService.LstUnitTypes = unitData;
  }

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
      this.prorateAmt = ProrateAmt;
      this.deposit = Deposit;
      this.depositTax = DepositTax;
      this.rate = Rate;
      this.rateTax = RateTax;
      this.prorateAmtTax = ProrateTax;
      this.othDeposit = OthDeposit;
      this.setup = Setup;
      this.setupTax = SetupTax;
      this.defaultTotalTaxAmount = TotalTaxAmount;
      this.defaultTotalChargesAmount = TotalChargesAmount;
      this.showPaymentForMoveIn = true;
      this.descriptionVR = description;
      this.monthlyRateVR = monthlyRate;
      this.unitTypeIdVR = intUnitTypeID;
      this.curStage = 2;
      }, err => {
      });
  }

  getData() {
  this.getDataSubscribe$ = this.fetchDataService.getData( )
    .subscribe(unitTypesResponse => {
      this.showTable =  true;
      this.LstUnitTypes = unitTypesResponse.lstUnitTypes;
    });
  }

  public ngOnDestroy(): void {
    if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
      this.getDataSubscribe$.unsubscribe();
    }
  }
}
