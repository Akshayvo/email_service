import { Component, OnInit, Renderer2, Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, jumbotron} from '../data/home';
import { MetaService } from '../services/link.service';
import { DOCUMENT } from '@angular/common';
import { UaParserService } from '../services/ua-parser.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresHead: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  jumbotron: any;
  currentActive: any = 'HOME';
  imageBaseUrl:any;
  imagetype:any;

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private _renderer2: Renderer2,
    private metaService: MetaService,
    private uaParserService: UaParserService,
    @Inject(DOCUMENT) private _document: any,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Catskill Self Storage has been proudly serving Catskill, Cairo, Leeds, and surrounding communities with
      affordable storage units since 2004!`
    });
    this.titleService.setTitle('Affordable Storage Units Near Catskill, NY, 12414 | Catskill Self Storage');
    this.metaService.createCanonicalURL();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    console.log('home component Base Url:', this.imageBaseUrl);
    console.log('Home component image type:',this.imagetype)
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
    this.fetchJumbotron();
    window.scrollTo(0, 0);

    // const s = this._renderer2.createElement('script');
    // s.type = `application/ld+json`;
    // s.text = `
    // {
    //   "@context": "http://www.schema.org",
    //   "@type": "SelfStorage",
    //   "name": "Catskill Self Storage",
    //   "url": "https://www.catskillselfstorage.com",
    //   "logo": "https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Catskill_Images/logo.png",
    //   "image": "https://s3.amazonaws.com/syrasoft-tenant-facing-websites/Catskill_Images/self-storage-units.jpg",
    //   "description": "Catskill Self Storage is a self storage facility serving Catskill, Cairo, Leeds, and surrounding communities with affordable regular and climate controlled self storage.",
    //   "address": {
    //     "@type": "PostalAddress",
    //     "streetAddress": "5877 Cauterskill Road",
    //     "addressLocality": "Catskill",
    //     "addressRegion": "NY",
    //     "postalCode": "12414",
    //     "addressCountry": "United States"
    //   },
    //   "geo": {
    //     "@type": "GeoCoordinates",
    //     "latitude": "42.2529936",
    //     "longitude": "-73.9089837"
    //   },
    //   "openingHours": "Mo, Tu, We, Th, Fr 09:00-18:00 Sa 09:00-15:00 Su 08:00-12:00",
    //   "contactPoint": {
    //     "@type": "ContactPoint",
    //     "telephone": "(518) 943-3003"
    //   }
    // }
    // `;

    // this._renderer2.appendChild(this._document.body, s);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }

  public fetchFeature () {
    this.feature = feature;
  }

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }
  public getImageUrl(imageName:string){
    return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
  }

}
