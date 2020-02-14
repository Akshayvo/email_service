import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRate } from '../../data/view';
import { MetaService } from '../../services/link.service';
import { UaParserService } from '../../services/ua-parser.service';

@Component({
  selector: 'app-view-rates-iframe-page',
  templateUrl: './view-rates-iframe-page.component.html',
  styleUrls: ['./view-rates-iframe-page.component.scss']
})
export class ViewRatesIframePageComponent implements OnInit {

  viewRates: any;
  imagetype: any;
  imageBaseUrl: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Check out the rates to the wide variety of self storage unit sizes and
      services at Cuba Self Storage here!`
    });
    this.titleService.setTitle('Affordable Units in Cuba, MO | Cuba Self Storage');
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
    this.viewRates = viewRate;
  }
}

