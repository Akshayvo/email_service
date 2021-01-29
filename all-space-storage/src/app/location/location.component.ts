import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, contactsLocation4, hoursLocation4,
          contactsLocation5, hoursLocation5
          } from '../data/contact';
import { tabs, heading3,  heading4, heading5 } from '../data/location';
import { heading1, heading2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, Location3Script, Location4Script,
  ogLocation1, ogLocation2, ogLocation3, ogLocation4, ogLocation5, twitterLocation1,
  twitterLocation2, twitterLocation3, twitterLocation4, twitterLocation5 } from '../data/script';
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
      if (this.router.url.includes('/location/poughkeepsie/arlington')) {
            this.meta.addTag({
              name: 'description',
              content: `Our Route 55 Poughkeepsie location has 24 hour access available, pin-code activated gates,
              and easy online auto-pay for your convenience!`
            });
            this.titleService.setTitle('Storage Units in Poughkeepsie, NY | AllSpace Storage');
            this.locationName = `AllSpace Storage - Poughkeepsie/Arlington`;
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
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
           this.meta.addTag({
             name: 'description',
             content: `Whether you own a home, rent an apartment, go to school or run a business,
             our Poughkeepsie/Hyde Park location can help you find the perfect storage unit for your needs!`
           });
           this.titleService.setTitle('Self Storage Units In Poughkeepsie, NY | AllSpace Storage');
           this.locationName = `AllSpace Storage - Poughkeepsie/Hyde Park`;
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
      } else if (this.router.url.includes('/location/highland')) {
        this.meta.addTag({
          name: 'description',
          content: `Our Highland location is fully lit, has boxes and moving supplies, pin-code
          activated gates and easy online auto-pay for your convenience!`
        });
        this.titleService.setTitle('Convenient Storage Units in Highland | AllSpace Storage');
        this.locationName = `AllSpace Storage - Highland`;
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
   } else if (this.router.url.includes('/location/lake-katrine')) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking for well-maintained, affordable self storage units near Lake Katrine, NY?
      AllSpace Storage has your storage needs covered!`
    });
    this.titleService.setTitle('Storage Units In Lake Katrine, NY | AllSpace Storage');
    this.locationName = `AllSpace Storage - Kingston/Lake Katrine`;
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
  } else if (this.router.url.includes('/location/pawling')) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking for a well maintained, fully lit self storage facility with great
      customer service and affordable pricing? We've got you covered!`
    });
    this.titleService.setTitle('Storage Units in Pawling, NY | AllSpace Storage');
    this.locationName = `AllSpace Storage - Pawling`;
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
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
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
      this.og = ogLocation1;
  } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
    this.og = ogLocation2;
  } else if (this.router.url.includes('/location/highland')) {
    this.og = ogLocation3;
  } else if (this.router.url.includes('/location/lake-katrine')) {
    this.og = ogLocation4;
  } else if (this.router.url.includes('/location/pawling')) {
    this.og = ogLocation5;
  }
  }

  public fetchTwitter() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
      this.twitter = twitterLocation1;
  } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
    this.twitter = twitterLocation2;
  } else if (this.router.url.includes('/location/highland')) {
    this.twitter = twitterLocation3;
  } else if (this.router.url.includes('/location/lake-katrine')) {
    this.twitter = twitterLocation4;
  } else if (this.router.url.includes('/location/pawling')) {
    this.twitter = twitterLocation5;
  }
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/highland')) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes('/location/lake-katrine')) {
      this.fetchDetailsLocation4();
    } else if (this.router.url.includes('/location/pawling')) {
      this.fetchDetailsLocation5();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/poughkeepsie/arlington/reserve-unit'],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/poughkeepsie/hyde-park/reserve-unit'],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate(['/location/highland/reserve-unit'],
         );
  }  else if ( this.locationId === 4 ) {
    this.router.navigate(['/location/lake-katrine/reserve-unit'],
          );
  } else if ( this.locationId === 5 ) {
    this.router.navigate(['/location/pawling/reserve-unit'],
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = heading1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = heading2;
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
    this.tabs = tabs;
  }

  public fetchDetailsLocation4() {
    this.name = heading4;
    this.locationId = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs;
  }

  public fetchDetailsLocation5() {
    this.name = heading5;
    this.locationId = 5;
    this.contacts = contactsLocation5;
    this.hours = hoursLocation5;
    this.tabs = tabs;
  }
}
