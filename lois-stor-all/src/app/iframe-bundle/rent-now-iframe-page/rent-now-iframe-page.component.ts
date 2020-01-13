import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewrates } from '../../data/view-rates';
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
      content: `Move into one of our self storage units or 110v or 220v electrified workshop units
      in minutes! Fill out our lease, pay online, and you'll receive your unique secure gate code!`
    });
    this.titleService.setTitle('Rent Now | State Storage Workshops');
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
    this.viewRates = viewrates;
  }
}

