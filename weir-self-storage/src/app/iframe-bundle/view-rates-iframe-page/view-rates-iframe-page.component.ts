import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { MetaService } from '../../services/link.service';
import { UaParserService } from '../../services/ua-parser.service';
import { galleryHome } from '../../data/galleryImage';

@Component({
  selector: 'app-view-rates-iframe-page',
  templateUrl: './view-rates-iframe-page.component.html',
  styleUrls: ['./view-rates-iframe-page.component.scss']
})
export class ViewRatesIframePageComponent implements OnInit {
  galleryImages: any;
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
      content: `Check out our affordable self storage unit rates and start the
        reservation process right here! Have a question? Call (906) 440-7943!`
    });
    this.titleService.setTitle('View Rates  | Weir Self Storage');
    this.metaService.createCanonicalURL();
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    this.fetchgalleryImages();
  }

  public fetchgalleryImages() {
    this.galleryImages = galleryHome;
  }
  public fetchViewRates() {
    this.viewRates = dataViewRates;
  }
}

