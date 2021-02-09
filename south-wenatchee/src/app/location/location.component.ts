import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, contactsLocation4, hoursLocation4,
          // contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs, tabs1, tabs2, heading3, tabs3, heading4 } from '../data/location';
import { heading1, heading2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, Location3Script, Location4Script,
  ogLocation1, ogLocation2, ogLocation3, ogLocation4, twitterLocation1,
  twitterLocation2, twitterLocation3, twitterLocation4 } from '../data/script';
import { featuresHead, featuresList } from '../data/home';


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


  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    // private canonical: CanonicalService,
    private activatedRoute: ActivatedRoute,
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
      if (this.router.url.includes('/location/south-wenatchee')) {
            this.meta.addTag({
              name: 'description',
              content: `Our Florida/Warwick location has a variety of unit sizes and all storage units
              are individually alarmed for your safety!`
            });
            this.titleService.setTitle('Storage Units in Chester, NY | StorageTown Rental Spaces');
            this.locationName = `Storage Town Rental Space - Chester - Andrews Lane`;
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
    } else if (this.router.url.includes('/location/chester-brookside-ave')) {
           this.meta.addTag({
             name: 'description',
             content: `Our brookside location offers a variety of well-lit, fully-fenced self
             storage unit sizes at affordable prices! Our pin-code accessible facility also offers RV and Boat storage!`
           });
           this.titleService.setTitle('Self Storage Units in brookside | StorageTown Rental Spaces');
           this.locationName = `Storage Town Rental Space - Chester - Brookside Ave`;
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
      } else if (this.router.url.includes('/location/montgomery-walden')) {
        this.meta.addTag({
          name: 'description',
          content: `Our Montgomery location offers a wide variety of affordable self storage units in a well-lit,
          fully-fenced storage facility! Call (845) 457-3500 to learn more!`
        });
        this.titleService.setTitle('Storage Units in Montgomery, NY | StorageTown Rental Spaces');
        this.locationName = `StorageTown Rental Spaces - Montgomery/Walden`;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
        this.dataSharingService.locationName = this.locationName;
        this.script = Location3Script;
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
   } else if (this.router.url.includes('/location/middletown-wallKill')) {
    this.meta.addTag({
      name: 'description',
      content: `Our Middletown location serves Middletown, Goshen and Wallkill with easy access to affordable,
      well maintained, fully-fenced in self storage units 7 days a week!`
    });
    this.titleService.setTitle('Self Storage Units in Middletown | StorageTown Rental Spaces');
    this.locationName = `StorageTown - Middletown/WallKill Location`;
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
    this.dataSharingService.locationName = this.locationName;
    this.script = Location4Script;
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
    if (this.router.url.includes('/location/south-wenatchee')) {
      this.og = ogLocation1;
  } else if (this.router.url.includes('/location/chester-brookside-ave')) {
    this.og = ogLocation2;
  } else if (this.router.url.includes('/location/montgomery-walden')) {
    this.og = ogLocation3;
  } else if (this.router.url.includes('/location/middletown-wallKill')) {
    this.og = ogLocation4;
  }
  }

  public fetchTwitter() {
    if (this.router.url.includes('/location/south-wenatchee')) {
      this.twitter = twitterLocation1;
  } else if (this.router.url.includes('/location/chester-brookside-ave')) {
    this.twitter = twitterLocation2;
  } else if (this.router.url.includes('/location/montgomery-walden')) {
    this.twitter = twitterLocation3;
  } else if (this.router.url.includes('/location/middletown-wallKill')) {
    this.twitter = twitterLocation4;
  }
  }

  public isSomePage() {
    if (this.router.url.includes('/location/south-wenatchee')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/chester-brookside-ave')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/montgomery-walden')) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes('/location/middletown-wallKill')) {
      this.fetchDetailsLocation4();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/south-wenatchee/reserve-unit'],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/chester-brookside-ave/reserve-unit'],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate(['/location/montgomery-walden/reserve-unit'],
         );
  }  else if ( this.locationId === 4 ) {
    this.router.navigate(['/location/middletown-wallKill/reserve-unit'],
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = heading2;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
    }

   public fetchDetailsLocation2() {
     this.name = heading1;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }

   public fetchDetailsLocation3() {
    this.name = heading3;
    this.locationId = 3;
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs2;
  }

  public fetchDetailsLocation4() {
    this.name = heading4;
    this.locationId = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs3;
  }
}
