import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FetchDataService } from '../services/fetch-data.service';
import { UnitTypes } from '../models/UnitTypes';

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  viewRates: any;
  UnitTypes: UnitTypes;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    // private http: HttpClient,
    private fetchDataService: FetchDataService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our units range from closet sized 5'x5' units to 10'x20' multi-bedroom home sized units.
      We strive to provide the highest level of service at the best prices! `
    });
    this.titleService.setTitle('Affordable Self Storage Near Catskill, NY, 12414 | Catskill Self Storage');
    this.metaService.createCanonicalURL();

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.getData(this.UnitTypes);
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

  getData(UnitTypes) {
    console.log('method is working');
    this.fetchDataService.getData(UnitTypes)
    .subscribe(data => {
      console.log('service is working');
      console.log(UnitTypes);
    });
  }
}
