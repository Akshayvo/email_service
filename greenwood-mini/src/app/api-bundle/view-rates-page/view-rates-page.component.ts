import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from '../services/location.service';
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

  descriptionVR: string;
  locationId: any;
  locationReserve: any;
  locationMovein: any;
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
  showSpecialData = [];
  facilityLocation: string;

  private getDataSubscribe$: Subscription;
  constructor(
    private getMoveinChargesService: MoveInService,
    private fetchDataService: FetchDataService,
    private data: LocationService,
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
  }

  public fetchThData() {
    this.th = th;
  }

  public navigate(location: any, unitData: any) {
    console.log(location);

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
    // this.router.navigate([`${environment.locationName}/${location}`]);

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

  receiveMessage() {
    if (this.router.url.includes(`${environment.locationName}/rebel-mini`)) {
      this.locationId = 1;
      this.locationReserve = "location1reserve";
      this.locationMovein = "location1movein";
  } 
else if (this.router.url.includes(`${environment.locationName}/howard-city`)) {
  this.locationId = 2;
  this.locationReserve = "location2reserve";
  this.locationMovein = "location2movein";
  } 
  else if (this.router.url.includes(`${environment.locationName}/ionia`)) {
    this.locationId = 3;
    this.locationReserve = "location3reserve";
    this.locationMovein = "location3movein";
  } 
   else if (this.router.url.includes(`${environment.locationName}/alpine`)) {
    this.locationId = 4;
    this.locationReserve = "location4reserve";
    this.locationMovein = "location4movein";
  } 
  else if (this.router.url.includes(`${environment.locationName}/red-barn`)) {
    this.locationId = 5;
    this.locationReserve = "location5reserve";
    this.locationMovein = "location5movein";
  } else if (this.router.url.includes(`${environment.locationName}/wayland-westside`)) {
    this.locationId = 6;
    this.locationReserve = "location6reserve";
    this.locationMovein = "location6movein";
  } else if (this.router.url.includes(`${environment.locationName}/wayland-mill`)) {
    this.locationId = 7;
    this.locationReserve = "location7reserve";
    this.locationMovein = "location7movein";
  } else if (this.router.url.includes(`${environment.locationName}/wayland-southside`)) {
    this.locationId = 8;
    this.locationReserve = "location8reserve";
    this.locationMovein = "location8movein";
  }
  else if (this.router.url.includes(`${environment.locationName}/dutton`)) {
    this.locationId = 9;
    this.locationReserve = "location9reserve";
    this.locationMovein = "location9movein";
  }
  else if (this.router.url.includes(`${environment.locationName}/m45`)) {
    this.locationId = 10;
    this.locationReserve = "location10reserve";
    this.locationMovein = "location10movein";
  }
  else if (this.router.url.includes(`${environment.locationName}/otsego`)) {
    this.locationId = 11;
    this.locationReserve = "location11reserve";
    this.locationMovein = "location11movein";
  }
  else if (this.router.url.includes(`${environment.locationName}/allendale`)) {
    this.locationId = 12;
    this.locationReserve = "location12reserve";
    this.locationMovein = "location12movein";
  }
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
