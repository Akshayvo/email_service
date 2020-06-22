import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { contactsLocation1, hoursLocation1,
  contactsLocation2, hoursLocation2 } from '../data/contact';
import { tabs } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';
import { UaParserService } from '../services/ua-parser.service';
import { locationPage1Title, locationPage1Content, locationPage2Title, locationPage2Content } from '../data/title';


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
      if (this.router.url.includes('/location/filitreau-lane')) {
          this.meta.addTag({
            name: 'description',
            content: `${this.locationPage1Content}`
          });
          this.titleService.setTitle(`${this.locationPage1Title}`);
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      } else if (this.router.url.includes('/location/springfield-road')) {
          this.meta.addTag({
            name: 'description',
            content: `${this.locationPage2Content}`
          });
          this.titleService.setTitle(`${this.locationPage2Title}`);
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
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
  }

  public isSomePage() {
    if (this.router.url.includes('/location/filitreau-lane')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/springfield-road')) {
      this.fetchDetailsLocation2();
    }
 }

  public navigateToContact() {
   this.router.navigate(['contact-us']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/pay-rent/filitreau-lane']);
    } else if ( this.id === 1 ) {
      this.router.navigate(['/pay-rent/springfield-road']);
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      this.router.navigate(['/location/filitreau-lane/reserveUnit'],
      );
    } else if ( this.id === 1 ) {
      this.router.navigate(['/location/springfield-road/reserveUnit'],
     );
    }
   }

  public fetchDetailsLocation1() {
      this.name = 'Bluegrass Storage - Filiatreau Lane';
      this.id = 0;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
      this.photo = `${this.imageBaseUrl}/location-page.${this.imagetype}`;
    }

   public fetchDetailsLocation2() {
     this.name = 'Bluegrass Storage - Springfield Road';
     this.id = 1;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/location-page.${this.imagetype}`;
   }
}
