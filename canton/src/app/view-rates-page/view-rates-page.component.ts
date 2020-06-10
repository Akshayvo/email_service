import { Component, OnInit, OnDestroy, ElementRef, HostListener, } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoveInService } from '../services/moveIn.service';
import { ObjCharges } from '../models/movein';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { FetchDataService } from '../services/fetch-data.service';
import { th } from '../data/view-rates';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { rates } from '../data/view-rates';

@Component({
  selector: 'app-view-rates-page',
  templateUrl: './view-rates-page.component.html',
  styleUrls: ['./view-rates-page.component.scss']
})
export class ViewRatesPageComponent implements OnInit, OnDestroy {

  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  rates: any;
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
  navTo: any;
  windowLocation: any;
  hideMoveInButton = false;
  showDiscount = false;

  private getDataSubscribe$: Subscription;
  constructor(
    private getMoveinChargesService: MoveInService,
    private fetchDataService: FetchDataService,
    private router: Router,
    private dataSharingService: DataSharingService,
    private eRef: ElementRef
  ) {
    this.windowLocation = window.location;
    // this.moveinUrl = `${path}\move-in`;
   }


  ngOnInit() {
    this.getData();
    this.fetchThData();
    this.dataSharingService.initMyNavLinks('viewRates', this.router.url);
    if (this.router.url.includes('lincoln-street-storage')) {
      this.rates = rates;
      this.showDiscount = true;
    } else {
      this.showDiscount = false;
    }

    if (this.router.url.includes('louisville-self-storage')) {
      this.hideMoveInButton = true;
    } else {
      this.hideMoveInButton = false;
    }
  }

  public fetchThData() {
    this.th = th;
  }


  public navigate(location: any, unitData: any) {

    // Base location of the facility will be appended to URL
    this.navTo = this.router.url;
    this.dataSharingService.setReservationData(unitData);
    this.dataSharingService.navigationTo = this.navTo;
    this.dataSharingService.navigateToPrevious = this.navTo;
    this.dataSharingService.updateMyNavLink('viewRates', 'next', `${this.navTo}/${location}`);
    this.dataSharingService.updateMyNavLink('viewRates', 'prev', `${this.router.url}`);
    const myNavLinks = this.dataSharingService.getMyNavLinks('viewRates');
    this.router.navigate([`${this.navTo}/${location}`]);
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
