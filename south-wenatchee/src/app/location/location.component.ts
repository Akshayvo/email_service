import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1, hoursLocation1AcessHours,
          contactsLocation2, hoursLocation2,
          } from '../data/contact';
import { tabs, tabs1, tabs2,  tabs3,  } from '../data/location';
import { heading1, heading2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, 
  ogLocation1, ogLocation2, twitterLocation1,
  twitterLocation2,  } from '../data/script';
import { featuresHead, featuresSouthWenatchee, featuresList } from '../data/home';
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
  access:any;
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
  load = true;
  onLoad:any;


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
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    });
      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes('/wa/south-wenatchee')) {
            this.meta.addTag({
              name: 'description',
              content: `Our South Wenatchee location offers a variety of unit types at very affordable rates! Check the rates and reserve today!`
            });
            this.titleService.setTitle('South Wenatchee Location | South Wenatchee Self Storage');
            this.locationName = `South Wenatchee Self Storage`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
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
    } else if (this.router.url.includes('/wa/leos-self-storage')) {
           this.meta.addTag({
             name: 'description',
             content: `Take a look at the rates and availability at our Leo's Self Storage
             location, then reserve your unit online in seconds, or call our office for
             more information!`
           });
           this.titleService.setTitle(`Leo's Self Storage | South Wenatchee Self Storage`);
           this.locationName = `Leo's Self Storage`;
           this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
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
      }
}

  ngOnInit() {
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.load = this.onLoad
    console.log(this.load)
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
    this.features = featuresSouthWenatchee;
    
  }

  
  public fetchOg() {
    if (this.router.url.includes('/wa/south-wenatchee')) {
      this.og = ogLocation1;
  } else if (this.router.url.includes('/wa/leos-self-storage')) {
    this.og = ogLocation2;
  } 
  }

  public fetchTwitter() {
    if (this.router.url.includes('/wa/south-wenatchee')) {
      this.twitter = twitterLocation1;
  } else if (this.router.url.includes('/wa/leos-self-storage')) {
    this.twitter = twitterLocation2;
  } 
  }

  public isSomePage() {
    if (this.router.url.includes('/wa/south-wenatchee')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/wa/leos-self-storage')) {
      this.fetchDetailsLocation2();
    } 
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/wa/south-wenatchee/reserve-unit'],
          );
    this.onLoad = true;
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/wa/leos-self-storage/reserve-unit'],
          );
    this.onLoad = true;
  }  
 }

  public fetchDetailsLocation1() {
      this.name = heading1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.access = hoursLocation1AcessHours;
      this.tabs = tabs1;
    }

   public fetchDetailsLocation2() {
     this.name = heading2;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }
   public scroll(el: any) {
    el.scrollIntoView();
}


}
