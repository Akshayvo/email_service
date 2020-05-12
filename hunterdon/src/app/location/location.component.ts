import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { contactsLocation1, hoursLocation1,
  contactsLocation2, hoursLocation2, contactsLocation3, hoursLocation3 } from '../data/contact';
import { tabs } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';
import { UaParserService } from '../services/ua-parser.service';
import { locationPage1Title, locationPage1Content, locationPage2Title, locationPage2Content,
  locationPage3Title, locationPage3Content } from '../data/title';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  id: number;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  socialLinks: any;
  data: any;
  location: any;
  imageBaseUrl: any;
  imagetype: any;
  photo: any;
  locationPage1Content: any;
  locationPage2Content: any;
  locationPage1Title: any;
  locationPage2Title: any;
  locationPage3Content: any;
  locationPage3Title: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private uaParserService: UaParserService,
    private dataSharingService: DataSharingService,
    ) {
      this.fetchMetaData();
      this.location = this.router.url;
      if (this.router.url.includes('/location/hunterdon-storage-ringoes')) {
          this.meta.addTag({
            name: 'description',
            content: `${this.locationPage1Content}`
          });
          this.titleService.setTitle(`${this.locationPage1Title}`);
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      } else if (this.router.url.includes('/location/hunterdon-storage-1')) {
          this.meta.addTag({
            name: 'description',
            content: `${this.locationPage2Content}`
          });
          this.titleService.setTitle(`${this.locationPage2Title}`);
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      } else if (this.router.url.includes('/location/hunterdon-storage-2')) {
        this.meta.addTag({
          name: 'description',
          content: `${this.locationPage3Content}`
        });
        this.titleService.setTitle(`${this.locationPage3Title}`);
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
    }
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
      this.imageBaseUrl = this.uaParserService.baseUrl;
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
        this.data = this.route.snapshot.data;
  }

  public fetchMetaData() {
    this.locationPage1Title = locationPage1Title;
    this.locationPage1Content = locationPage1Content;
    this.locationPage2Title = locationPage2Title;
    this.locationPage2Content = locationPage2Content;
    this.locationPage3Title = locationPage3Title;
    this.locationPage3Content = locationPage3Content;
  }

  public isSomePage() {
    if (this.router.url.includes('/location/hunterdon-storage-ringoes')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/hunterdon-storage-1')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/hunterdon-storage-2')) {
      this.fetchDetailsLocation3();
    }
 }

  public navigateToContact() {
   this.router.navigate(['contact-us']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/pay-rent/hunterdon-storage-ringoes']);
    } else if ( this.id === 1 ) {
      this.router.navigate(['/pay-rent/hunterdon-storage-1']);
    } else if ( this.id === 2 ) {
      this.router.navigate(['/pay-rent/hunterdon-storage-2']);
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      this.router.navigate(['/location/hunterdon-storage-ringoes/reserveUnit'],
      );
    } else if ( this.id === 1 ) {
      this.router.navigate(['/location/hunterdon-storage-1/reserveUnit'],
     );
    } else if ( this.id === 2 ) {
      this.router.navigate(['/location/hunterdon-storage-2/reserveUnit'],
     );
    }
   }

  public fetchDetailsLocation1() {
      this.name = 'Hunterdon Storage at Ringoes';
      this.id = 0;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
      this.photo = `${this.imageBaseUrl}/location-page.${this.imagetype}`;
    }

   public fetchDetailsLocation2() {
     this.name = 'Hunterdon Storage I';
     this.id = 1;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/location-page.${this.imagetype}`;
   }

   public fetchDetailsLocation3() {
    this.name = 'Hunterdon Storage II';
    this.id = 2;
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs;
    this.photo = `${this.imageBaseUrl}/location-page.${this.imagetype}`;
  }
}
