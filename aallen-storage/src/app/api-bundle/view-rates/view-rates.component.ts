import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { viewRates } from '../../data/blurb';
import { UaParserService } from '../../services/ua-parser.service';
import { script } from '../../data/script';
import { viewRatesPageTitle, viewRatesPageContent } from '../../data/title';
import { CanonicalService } from '../../services/canonical.service';


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;
  imageBaseUrl: any;
  imagetype: any;
  state:string;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
    private canonical: CanonicalService
  ) {
   this.state = script.state;
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.viewRatesPageContent}`
    });
    this.titleService.setTitle('View Rates | Aallen Self Storage');
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchViewRate();
    // this.fetchSlideShow();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = dataViewRates;
  }
 
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

}
