import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates, viewRatesAltText } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { UaParserService } from '../../services/ua-parser.service';
import { viewRatesHeading } from '../..//data/heading';
import { viewRates } from '../../data/blurb';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';
import { aboutUsAlt } from '../../data/home';

@Component({
  selector: 'app-view-rates-iframe-page',
  templateUrl: './view-rates-iframe-page.component.html',
  styleUrls: ['./view-rates-iframe-page.component.scss']
})
export class ViewRatesIframePageComponent implements OnInit {

  viewRates: any;
  viewRate: any;
  imagetype: any;
  imageBaseUrl: any;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  viewRatesAltText: string;
  aboutUsAlt: string;

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
    this.fetchViewRatesHeading();
    window.scrollTo(0, 0);
    this.fetchViewRates();
  }

  public fetchViewRatesHeading() {
    this.viewRatesHeading = viewRatesHeading;
    this.aboutUsAlt = aboutUsAlt;
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }


  public fetchViewRates() {
    this.viewRates = viewRates;
    this.viewRate = dataViewRates;
    this.viewRatesAltText = viewRatesAltText;
  }
}

