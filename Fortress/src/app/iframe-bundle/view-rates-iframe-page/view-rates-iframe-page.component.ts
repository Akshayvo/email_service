import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { UaParserService } from '../../services/ua-parser.service';
import { viewRatesHeading } from '../..//data/heading';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';

@Component({
  selector: 'app-view-rates-iframe-page',
  templateUrl: './view-rates-iframe-page.component.html',
  styleUrls: ['./view-rates-iframe-page.component.scss']
})
export class ViewRatesIframePageComponent implements OnInit {

  viewRates: any;
  imagetype: any;
  imageBaseUrl: any;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;

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
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }


  public fetchViewRates() {
    this.viewRates = dataViewRates;
  }
}

