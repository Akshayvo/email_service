import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes, LstUnitTypes } from '../models/unittypes';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  viewRates: any;
  showTable = false;
  unitTypes: UnitTypes;
  LstUnitTypes: LstUnitTypes[];

  DescriptionVR: string;
  MonthlyRateVR: number;

  openComponent = false;
  imagetype:any;
  imageBaseUrl:any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    // private http: HttpClient,
    private fetchDataService: FetchDataService,
    private MetaService: MetaService,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our units range from closet sized 5'x5' units to 10'x20' multi-bedroom home sized units.
      We strive to provide the highest level of service at the best prices! `
    });
    this.titleService.setTitle('Affordable Self Storage Near Catskill, NY, 12414 | Catskill Self Storage');
    this.metaService.createCanonicalURL();
    this.MetaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.getData(this.unitTypes);
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
  

  handleClick(event: Event, event1: Event) {
    this.openComponent = true;
    this.DescriptionVR = JSON.parse(JSON.stringify(event));
    this.MonthlyRateVR = parseFloat(JSON.stringify(event1));
    
    // console.log(event, event1, this.DescriptionVR, this.MonthlyRateVR);
    
  }

  getData(UnitTypes) {
    this.fetchDataService.getData(UnitTypes)
    .subscribe(UnitTypes => {
      this.showTable =  true;
      this.LstUnitTypes = UnitTypes.lstUnitTypes;
    });
  }
}
