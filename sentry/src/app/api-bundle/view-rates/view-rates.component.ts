import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates, altText } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../../services/ua-parser.service';
import { Subscription } from 'rxjs';
import { viewRatesHeading } from '../../data/heading';
import { viewRatesPageTitle, viewRatesPageContent } from '../../data/title';
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
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  altText: string;
 private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.viewRatesPageContent}`
    });
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.fetchViewRatesHeading();
  }

  public fetchViewRates() {
    this.viewRates = dataViewRates;
    this.altText = altText;
  }

  public fetchViewRatesHeading() {
    this.viewRatesHeading = viewRatesHeading;
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }


  handleClick(event: Event, event1: Event) {
    this.openComponent = true;
    this.DescriptionVR = JSON.parse(JSON.stringify(event));
    this.MonthlyRateVR = parseFloat(JSON.stringify(event1));
  }


  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}
