import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { galleryHome } from '../data/galleryImage';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, blurb} from '../data/home';
import { homeScript } from '../data/script';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  galleryImages: any;
  contactDetails: any;
  hours: any;
  featuresHead: any;
  blurb: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  script: any;
  currentActive: any = 'HOME';
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Weir Self Storage offers convenient 24/7 access to your belongings, online payments and
                a variety of unit sizes for all of your self storage needs.`
    });
    this.titleService.setTitle('Self Storage Units in Sault Ste. Marie | Weir Self Storage');
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
    window.scrollTo(0, 0);
    this.fetchScript();
    this.fetchGalleryImages();
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchScript() {
    this.script = homeScript;
  }

  public fetchGalleryImages() {
    this.galleryImages = galleryHome;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
