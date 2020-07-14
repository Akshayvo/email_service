import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
       socialLinks
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
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
            this.titleService.setTitle('Storage Units & Vehicle Parking in Floral City | Affordable Secure Storage');
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
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


   public navigateToReserve() {
    if ( this.locationId === 1 ) {
      this.router.navigate(['/location/affordable-secure-storage-floral-city/reserveUnit']);
    }
   }
}
