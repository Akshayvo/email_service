import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoveInService } from '../services/moveIn.service';
import { ObjCharges } from '../models/movein';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { FetchDataService } from '../services/fetch-data.service';
import { th } from '../../data/view-rates';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-view-rates-page',
  templateUrl: './view-rates-page.component.html',
  styleUrls: ['./view-rates-page.component.scss']
})
export class ViewRatesPageComponent implements OnInit, OnDestroy {

  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];
  facilityName: string;
  descriptionVR: string;
  monthlyRateVR: number;
  unitTypeIdVR: number;
  ProrateAmt: any;
  locationId: any;
  locationReserve: any;
  locationMovein: any;
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
  state: string;
  showPaymentForMoveIn = false;
  showPaymentForReserve = false;
  objCharges: ObjCharges;
  th: any;
  tenant: any;
  text = false;
  navTo: any;
  windowLocation: any;
  showSpecialData = [];
  facilityLocation: string;
  Description: any;

  private getDataSubscribe$: Subscription;
  constructor(
    private getMoveinChargesService: MoveInService,
    private fetchDataService: FetchDataService,
    private router: Router,
    private dataSharingService: DataSharingService,
    private eRef: ElementRef
  ) {
    this.windowLocation = window.location;
   }


  ngOnInit() {
    this.receiveMessage();
    this.getData();
    this.fetchThData();
    this.dataSharingService.initMyNavLinks('viewRates', this.router.url);
    this.facilityLocation = this.dataSharingService.facilityLocation;
    this.facilityName = environment.facilityName;
    this.state = environment.locationName;
  }

  public fetchThData() {
    this.th = th;
  }

  receiveMessage() {
    if (this.router.url.includes(`${environment.locationName}/dallas-secure-storage`)) {
      this.locationId = 1;
      this.locationReserve = "location1reserve";
      this.locationMovein = "location1movein";
  } 
else if (this.router.url.includes(`${environment.locationName}/location-2`)) {
  this.locationId = 2;
  this.locationReserve = "location2reserve";
  this.locationMovein = "location2movein";
  } 
  else if (this.router.url.includes(`${environment.locationName}/location-3`)) {
    this.locationId = 3;
    this.locationReserve = "location3reserve";
    this.locationMovein = "location3movein";
  } 
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
    console.log('TCL: ViewRatesPageComponent -> navigate -> myNavLinks', myNavLinks);
    this.router.navigate([`${environment.locationName}/${this.facilityLocation}/${location}`]);
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

  public testRegex(unitType) {
    const {
      Description,
      UnitLength,
      UnitWidth
    } = unitType
    if(Description === "RV Parking") {
      this.Description = Description;
       return this.Description; 
    } else {
      this.Description = `${UnitLength}x${UnitWidth}`;
      return this.Description;
    }
  } 

  public ngOnDestroy(): void {
    if (this.getDataSubscribe$ && this.getDataSubscribe$.closed) {
      this.getDataSubscribe$.unsubscribe();
    }
  }
}
