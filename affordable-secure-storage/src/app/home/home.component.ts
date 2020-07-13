import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1,
       } from '../data/contact';
import { featuresHead, serviceOffered, gettingStarted } from '../data/home';
import { LocationService } from '../services/location.service';
import { homeScript } from '../data/script';
import { UaParserService } from '../services/ua-parser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hoursDetails: any;
  locationId: any;
  features: any;
  serviceOffered: any;
  contactsLocation1: any;
  contactsLocation3: any;
  hoursLocation1: any;
  hoursLocation3: any;
  gettingStarted: any;
  script: any;
  imageBaseUrl: any;
  imagetype: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `ur facilities offer a range of affordable, convenient self storage, and parking services in
      Florida and Georgia. Call or reserve your space today!`
    });
    this.titleService.setTitle('Self Storage Facilities in Florida & Georgia | Affordable Secure Storage');
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    // this.receiveMessage();
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchScript();
  }

  public fetchContactDetails() {
    this.contactsLocation1 = contactsLocation1;
  }
  public fetchHours() {
    this.hoursLocation1 = hoursLocation1;
  }

  public fetchScript() {
    this.script = homeScript;
  }
  // receiveMessage() {
  //   this.data.currentLocation.subscribe(locationId => {
  //     this.locationId = locationId;
  //     this.dataupdate();
  //   });
  // }

  // public dataupdate() {
  //   if ( this.locationId === '1' || this.locationId === 1 ) {
  //     this.fetchContactDetailsLocation1();
  //   }else if ( this.locationId === '3' ) {
  //     this.fetchContactDetailsLocation3();
  //   }
  // }Movin' On Storage Center

  //   public fetchContactDetailsLocation1() {
  //     this.heading = `Movin' On Storage Center`;
  //     this.contactDetails = contactsLocation1;
  //     this.hoursDetails = hoursLocation1;
  //   }


    // public fetchContactDetailsLocation3() {
    //   this.heading = `Natrona Heights Self Storage`;
    //   this.contactDetails = contactsLocation3;
    //   this.hoursDetails = hoursLocation3;
    // }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
    this.gettingStarted = gettingStarted;
  }
}
