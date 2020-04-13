import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate, altText} from '../../data/view';
import { viewRates } from '../../data/blurb';
import { CanonicalService } from '../../services/canonical.service';
import { viewRatesHeading } from '../../data/heading';
import { viewRatesPageContent, viewRatesPageTitle } from '../../data/title';
import { UaParserService } from '../../services/ua-parser.service';

@Component({
  selector: 'app-view-rates-iframe-page',
  templateUrl: './view-rates-iframe-page.component.html',
  styleUrls: ['./view-rates-iframe-page.component.scss']
})
export class ViewRatesIframePageComponent implements OnInit {

  viewRate: any;
  viewRates: any;
  viewRatesHeading: string;
  alt: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  imageBaseUrl: any;
  imagetype: any;



  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    private uaParserService: UaParserService,

    ) {
      this.fetchMetaData();
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `${this.viewRatesPageContent}`
      });
      this.titleService.setTitle(`${this.viewRatesPageTitle}`);
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
      this.imageBaseUrl = this.uaParserService.baseUrl;
  }


  ngOnInit() {
    this.fetchViewRate();
    this.fetchViewRates();
    window.scrollTo(0, 0);
  }

  public fetchViewRate() {
    this.viewRate = viewRate;
    this.viewRatesHeading = viewRatesHeading;
    this.alt = altText;
  }

  public fetchViewRates() {
    this.viewRates = viewRates;
  }

  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }

  public getImageUrl(imageName: string) {
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }

}
