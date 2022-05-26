import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3,
          } from '../data/contact';
import { tabs, headingLocation3 } from '../data/location';
import { headingLocation1, headingLocation2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { UaParserService } from '../services/ua-parser.service';
import { homePageTitle, homePageContent } from '../data/title';
import { homePageScript, ogHomePage, twitterHomePage } from '../data/script';



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
  imagetype: any;
  imageBaseUrl: any;
  script: any;
  ogHomePage: any;
  twitterHomePage: any;
  homePageContent: string;
  homePageTitle: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService,
    private activatedRoute: ActivatedRoute,
    private uaParserService: UaParserService,
    ) {
      
      this.fetchScript();
    this.loadScript();
    this.fetchMetaData();
    this.fetchOgHomePage();
    this.fetchTwitterHomePage();
    this.canonical.create();
    this.ogHomePage.forEach(element => {
      this.meta.addTag({
        property: element.property,
        content: element.content
      })
    });

    this.twitterHomePage.forEach(element => {
      this.meta.addTag({
        name: element.name,
        content: element.content
      })
    });

    this.meta.addTag({
      name: 'description',
      content: `${this.homePageContent}`
    });

      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes('/location/mcKenzie')) {
        this.canonical.create();
            this.meta.addTag({
              name: 'description',
              content: `Our McKenzie location offers 24 hour access to your self storage unit, plus online reservations
              and payments to make your next storage project a breeze!`
            });
            this.titleService.setTitle('24 Hour Self Storage in McKenzie | Carroll County Storage');
            this.locationName = `Carroll County Storage - McKenzie`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
            this.dataSharingService.locationName = this.locationName;


    } else if (this.router.url.includes('/location/huntingdon')) {
      this.canonical.create();
           this.meta.addTag({
             name: 'description',
             content: `Our Huntingdon location provides 24 hour access to your storage unit, plus online
             reservations and payments to make your next storage project a breeze!`
           });
           this.titleService.setTitle('24 Hour Self Storage in Huntingdon | Carroll County Storage');
           this.locationName = `Carroll County Storage - Huntingdon`;
           this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
           this.dataSharingService.locationName = this.locationName;


      } else if (this.router.url.includes('/location/airport')) {
        this.canonical.create();
        this.meta.addTag({
          name: 'description',
          content: `Our airport location offers 24 hour access to your self storage unit, plus
          online reservations and payments to simplify your next storage project!`
        });
        this.titleService.setTitle('24 Hour Self Storage at the Airport | Carroll County Storage');
        this.locationName = `Carroll County Storage at the Airport`;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
        this.dataSharingService.locationName = this.locationName;

    }
}

  ngOnInit() {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/mcKenzie')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/huntingdon')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/airport')) {
      this.fetchDetailsLocation3();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/mcKenzie/reserve-unit'],
    );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/huntingdon/reserve-unit'],
   );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate(['/location/airport/reserve-unit'],
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

   public fetchDetailsLocation3() {
    this.name = headingLocation3;
    this.locationId = 3;
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs;
  }


  public loadScript() {
    const node = document.createElement('script'); // creates the script tag
    node.type = 'application/ld+json'; // set the script type
    node.async = false; // makes script run asynchronously
    // node.charset = 'utf-8';
    node.innerHTML = JSON.stringify(this.script);
    // append to head of document
    // document.getElementsByTagName('head')[0].appendChild(node);
    document.head.appendChild(node);

  }

  public fetchScript() {
    this.script = homePageScript;
  }

  public fetchTwitterHomePage() {
    this.twitterHomePage = twitterHomePage;
  }

  public fetchMetaData() {
    this.homePageTitle = homePageTitle;
    this.homePageContent = homePageContent;
  }

  public fetchOgHomePage() {
    this.ogHomePage = ogHomePage;
  }

  


}
