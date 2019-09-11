import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
import { UaParserService } from '../services/ua-parser.service'

@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  viewRates: any;
  imagetype:any;
  imageBaseUrl:any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private MetaService: MetaService,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our units range from closet sized 5'x5' units to 10'x20' multi-bedroom home sized units.
      We strive to provide the highest level of service at the best prices! `
    });
    this.titleService.setTitle('Affordable Self Storage Near Catskill, NY, 12414 | Catskill Self Storage');
    this.MetaService.createCanonicalURL();
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
