import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          } from '../data/contact';
import { tabs } from '../data/location';
import { headingLocation1, headingLocation2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script,
  ogLocation1, ogLocation2,
  twitterLocation1, twitterLocation2, } from '../data/script';
import { featuresHead, featuresList } from '../data/home';
import { UaParserService } from '../services/ua-parser.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
  currentTab: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  locationName: string;
  script: any;
  twitter: any;
  og: any;
  featuresList: any;
  features: any;
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    // private canonical: CanonicalService,
    private activatedRoute: ActivatedRoute,
    private uaParserService: UaParserService,
    ) {
      // this.canonical.create();

      this.fetchOg();
    this.fetchTwitter();
    this.og.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitter.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });
      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes('/location/line-drive')) {
            this.meta.addTag({
              name: 'description',
              content: `Check out our quality self storage units and affordable rates at our Line Drive location, then reserve or call today!`
            });
            this.titleService.setTitle('Self Storage Units and Parking in Pasadena | A-Quality Storage');
            this.locationName = `A-Quality Storage - Line Drive Location`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location1Script;
            this.loadScript();
            this.og.forEach(element => {
              this.meta.addTag({
                property: element.property,
                content: element.content
              })
            });
        
            this.twitter.forEach(element => {
              this.meta.addTag({
                name: element.name,
                content: element.content
              })
            });
    } else if (this.router.url.includes('/location/holly-avenue')) {
           this.meta.addTag({
             name: 'description',
             content: `Check out our quality self storage units and affordable rates at our Holly Avenue location, then reserve or call today!`
           });
           this.titleService.setTitle('Affordable Self Storage Units in Pasadena | A-Quality Storage');
           this.locationName = `A-Quality Storage - Holly Avenue Location`;
           this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
           this.dataSharingService.locationName = this.locationName;
           this.script = Location2Script;
           this.loadScript();
           this.og.forEach(element => {
            this.meta.addTag({
              property: element.property,
              content: element.content
            })
          });
      
          this.twitter.forEach(element => {
            this.meta.addTag({
              name: element.name,
              content: element.content
            })
          });
      } 
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
}

  ngOnInit() {
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.isSomePage();
    this.fetchFeatures();
  }

  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  
  public fetchOg() {
    if (this.router.url.includes('/location/line-drive')) {
      this.og = ogLocation1;
  } else if (this.router.url.includes('/location/holly-avenue')) {
    this.og = ogLocation2;
  }
}

  public fetchTwitter() {
    if (this.router.url.includes('/location/line-drive')) {
      this.twitter = twitterLocation1;
    } else if (this.router.url.includes('/location/holly-avenue')) {
      this.twitter = twitterLocation2;
    }
  }

  public isSomePage() {
    if (this.router.url.includes('/location/line-drive')) {
      this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/holly-avenue')) {
      this.fetchDetailsLocation2();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/line-drive/reserve-unit'],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/holly-avenue/reserve-unit'],
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = headingLocation2;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }
}
