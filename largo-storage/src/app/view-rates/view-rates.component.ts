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
  unitTypeId: any;
  ProrateAmt: any;
  Deposit: any;
  openComponent = false;
  showMoveIn = false;
  imagetype: any;
  imageBaseUrl: any;
  curStage = 0;

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

  handleClick(unitDescription: any, monthlyRate: any) {
    this.curStage = 1;
    this.DescriptionVR = unitDescription;
    this.MonthlyRateVR = monthlyRate;
  }

  getMoveInCharges(description: any, monthlyRate: any, intUnitTypeID: any) {
      this.getMoveinChargesService.getMoveInCharges({
        intUnitTypeID
      }).subscribe(result => {
        const {objCharges: { ProrateAmt = 0, Deposit = 0}} = result;
        this.ProrateAmt = ProrateAmt;
        this.Deposit = Deposit;
        console.log(result);
        
        console.log('TCL: ViewRatesComponent -> getMoveInCharges -> this.ProrateAmt', this.ProrateAmt, this.Deposit);
        this.DescriptionVR = description;
        this.MonthlyRateVR = monthlyRate;
        this.unitTypeId = intUnitTypeID;
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
