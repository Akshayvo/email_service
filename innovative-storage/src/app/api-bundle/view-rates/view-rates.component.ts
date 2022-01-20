import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { dataViewRates } from '../../data/view-rates';
import { viewRates } from '../../data/blurb';
import { UaParserService } from '../../services/ua-parser.service';
import { Subscription } from 'rxjs';
import { script } from '../../data/script';
import { viewRatesPageTitle, viewRatesPageContent } from '../../data/title';
import { CanonicalService } from '../../services/canonical.service';
import { galleryHome } from '../../data/galleryImage'; 


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  viewRate: any;
  slideShow: any;
  viewRates: any;
  selectedImage: any;
  imageBaseUrl: any;
  imagetype: any;
  galleryImages: any;
  state:string;
  viewRatesHeading: string;
  viewRatesPageContent: string;
  viewRatesPageTitle: string;
  private isUnsubscribe$: Subscription;


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
    this.titleService.setTitle(`${this.viewRatesPageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchGallery();
    this.setSelectedImage(this.galleryImages[0]);
    window.scrollTo(0, 0);
    this.fetchViewRate();
    this.fetchViewRates();   
  }

  setSelectedImage(image: any) {
    this.selectedImage = image;
 }

  public fetchViewRate() {
    this.viewRate = dataViewRates;
  }

  public fetchGallery() {
    this.galleryImages = galleryHome;
  }
 
  public fetchViewRates() {
    this.viewRates = viewRates;
  }
  public fetchMetaData () {
    this.viewRatesPageContent = viewRatesPageContent;
    this.viewRatesPageTitle = viewRatesPageTitle;
  }
  public ngOnDestroy(): void {
    if (this.isUnsubscribe$ && this.isUnsubscribe$.closed) {
      this.isUnsubscribe$.unsubscribe();
    }
  }
}
