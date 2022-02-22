import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
       socialLinks,
       contactsLocation2,
       hoursLocation2,
       contactsLocation3,
       hoursLocation3, contactsLocation4, hoursLocation4, contactsLocation5, hoursLocation5
          } from '../data/contact';
import { tabs1, tabs2, tabs3, tabs4, tabs5, headingLocation2, headingLocation3, headingLocation4, headingLocation5  } from '../data/location';
import { headingLocation1 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { UaParserService } from '../services/ua-parser.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  socialLinks: any;
  imageBaseUrl: any;
  imagetype: any;
  ReserveButton: boolean;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    private uaParserService: UaParserService,

    ) {
      if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
            this.meta.addTag({
              name: 'description',
              content: `Check out our affordable rates for self storage units and boat, RV, or vehicle parking
              spaces in Floral City, then reserve your unit online, or call our friendly team!`
            });
            this.ReserveButton = false
            this.titleService.setTitle('Storage Units & Vehicle Parking in Floral City | Affordable Secure Storage');
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      } else if (this.router.url.includes('/location/affordable-secure-storage-west-hernando')) {
          this.meta.addTag({
            name: 'description',
            content: `Take a moment to review our units and rates at our 7th location at 2633 East. Main Street! Then reserve online in a jiffy with our form!`
          });
          this.ReserveButton = false;
          this.titleService.setTitle('Self Storage Units in Hernango | Affordable Secure Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
    } else if (this.router.url.includes('/location/affordable-secure-storage-labelle')) {
          this.meta.addTag({
            name: 'description',
            content: `Check out our quality self storage units and affordable rates at our Labelle location, then reserve or call today!`
          });
          this.ReserveButton = true;
          this.titleService.setTitle('Self Storage Units and Parking in Labelle | Affordable Secure Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
    } else {
      if (this.router.url.includes('/location/affordable-secure-storage-backyard')) {
        this.meta.addTag({
          name: 'description',
          content: `Check out our quality self storage units and affordable rates at our Labelle location, then reserve or call today!`
        });
        this.ReserveButton = true;
        this.titleService.setTitle('Self Storage Units and Parking in Backyard | Affordable Secure Storage');
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
      } else {
        if (this.router.url.includes('/location/affordable-secure-storage-hernando')) {
          this.meta.addTag({
            name: 'description',
            content: `Check out our quality self storage units and affordable rates at our Hernando location, then reserve or call today!`
          });
          this.ReserveButton = false;
          this.titleService.setTitle('Self Storage Units and Parking in Hernando | Affordable Secure Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
        }
      }
    }
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
      this.imageBaseUrl = this.uaParserService.baseUrl;
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/affordable-secure-storage-west-hernando')) {
        this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/affordable-secure-storage-labelle')) {
        this.fetchDetailsLocation3();
    } else if (this.router.url.includes('/location/affordable-secure-storage-backyard')) {
        this.fetchDetailsLocation4();
    } else if (this.router.url.includes('/location/affordable-secure-storage-hernando')) {
      this.fetchDetailsLocation5();
    }
 }



  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
      this.socialLinks = socialLinks;
    }

    public fetchDetailsLocation2() {
      this.name = headingLocation2;
      this.locationId = 2;
      this.contacts = contactsLocation2;
      this.hours = hoursLocation2;
      this.tabs = tabs2;
      this.socialLinks = socialLinks;
    }

    public fetchDetailsLocation3() {
      this.name = headingLocation3;
      this.locationId = 3;
      this.contacts = contactsLocation3;
      this.hours = hoursLocation3;
      this.tabs = tabs3;
      this.socialLinks = socialLinks;
    }

    public fetchDetailsLocation4() {
      this.name = headingLocation4;
      this.locationId = 4;
      this.contacts = contactsLocation4;
      this.hours = hoursLocation4;
      this.tabs = tabs4;
      this.socialLinks = socialLinks;
    }


    public fetchDetailsLocation5() {
      this.name = headingLocation5;
      this.locationId = 5;
      this.contacts = contactsLocation5;
      this.hours = hoursLocation5;
      this.tabs = tabs5;
      this.socialLinks = socialLinks;
    }

   public navigateToReserve() {
    if ( this.locationId === 1 ) {
      this.router.navigate(['/location/affordable-secure-storage-floral-city/reserveUnit']);
    } else if ( this.locationId === 2 ) {
      this.router.navigate(['/location/affordable-secure-storage-west-hernando/reserveUnit']);
    } else if ( this.locationId === 3 ) {
      this.router.navigate(['/location/affordable-secure-storage-labelle/reserveUnit']);
    } else if ( this.locationId === 4 ) {
        this.router.navigate(['/location/affordable-secure-storage-backyard/reserveUnit']);
    } else if ( this.locationId === 5 ) {
      this.router.navigate(['/location/affordable-secure-storage-hernando/reserveUnit']);
  }
   }
}
