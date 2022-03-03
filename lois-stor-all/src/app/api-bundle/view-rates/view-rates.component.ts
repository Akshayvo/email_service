import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../../services/ua-parser.service';
import { Subscription } from 'rxjs';
import { viewRatesPageTitle, viewRatesPageContent } from "../../data/title";
import { Router } from "@angular/router";
import { CanonicalService } from "../../services/canonical.service";
import { script } from "../../data/script";
import { environment } from "../../../environments/environment";



@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit, OnDestroy {

  viewRates: any;
  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  DescriptionVR: string;
  MonthlyRateVR: number;

  openComponent = false;
  imagetype: any;
  imageBaseUrl: any;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  state: string;

 private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private fetchDataService: FetchDataService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService,
    private router: Router,
  ) {
    // this.meta.addTag({
    //   name: 'description',
    //   content: `Take a moment to review our affordable storage unit rates
    //   and see if we have the right unit for your needs available!`
    // });
    this.state = script.state;
    this.fetchMetaData();
    this.meta.updateTag({
      name: "description",
      content: `${this.viewRatesPageContent}`,
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.canonical.create();
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    // this.getData();
  }

  public navigate(location: any) {
    if (
      location === "/view-rates" ||
      location === "/storage-tips" ||
      location === "/reserve-unit"
    ) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]);
    }
  }

  
  public fetchViewRates() {
    this.viewRates = dataViewRates;  }



    public fetchMetaData() {
      this.viewRatesPageContent = viewRatesPageContent;
      this.viewRatesPageTitle = viewRatesPageTitle;
    }


  /**
   *
   * @param event
   * @param event1
   */

  handleClick(event: Event, event1: Event) {
    this.openComponent = true;
    this.DescriptionVR = JSON.parse(JSON.stringify(event));
    this.MonthlyRateVR = parseFloat(JSON.stringify(event1));

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
