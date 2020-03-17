import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../../services/ua-parser.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRates: any;
  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  DescriptionVR: string;
  MonthlyRateVR: number;

  openComponent = false;
  imagetype: any;
  imageBaseUrl: any;

 private isUnsubscribe$: Subscription;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private fetchDataService: FetchDataService,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out the competitive rates for our high-quality self storage units! Access Storage is the premier storage facility in New Braunfels, TX`
    });
    this.titleService.setTitle('View Rates  | Access Self Storage');
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
}
