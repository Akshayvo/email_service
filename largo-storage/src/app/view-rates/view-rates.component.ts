import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../services/ua-parser.service';

import { Subscription } from 'rxjs';
import { MoveInService } from '../services/moveIn.service';
import { objCharges } from '../models/movein';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit, OnDestroy {

  currentActive: any = 'VIEW RATES';
  viewRates: any;
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
  imagetype: any;
  imageBaseUrl: any;
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

 private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    // private http: HttpClient,
    private fetchDataService: FetchDataService,
    private uaParserService: UaParserService,
    private getMoveinChargesService: MoveInService,
    private router: Router,
  ) {
    this.meta.addTag({
      name: 'description',
      // tslint:disable-next-line:max-line-length
      content: `Take a moment and review our affordable self storage unit rates, then make your reservation with our easy reservation form!`
    });
    this.titleService.setTitle('View Rates | State Storage Largo');
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.getData();
  }

  public fetchViewRates() {
    this.viewRates = viewrates;
  }
  /**
   *
   * @param event
   * @param event1
   */

  handleClick(unitDescription: any, monthlyRate: any, unitTypeId: number) {
    this.curStage = 1;
    this.DescriptionVR = unitDescription;
    this.MonthlyRateVR = monthlyRate;
    this.unitTypeIdVR = unitTypeId;
    this.clickedMoveIn = true;
    this.showPaymentForReserve = true;
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
      console.log(unitTypesResponse);
       
    });
  }

  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}
