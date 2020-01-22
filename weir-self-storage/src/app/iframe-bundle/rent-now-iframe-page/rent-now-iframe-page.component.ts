import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { UaParserService } from '../../services/ua-parser.service';

@Component({
  selector: 'app-rent-now-iframe-page',
  templateUrl: './rent-now-iframe-page.component.html',
  styleUrls: ['./rent-now-iframe-page.component.scss']
})
export class RentNowIframePageComponent implements OnInit {

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
      content: ``
    });
    this.titleService.setTitle('');
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
    this.viewRates = dataViewRates;
  }
}

