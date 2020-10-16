import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2,
  contactsLocation3, hoursLocation3, } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';
import { CanonicalService } from '../services/canonical.service';
import { LocationService } from '../services/location.service';
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
  heading: string;
  features: any;
  imageBaseUrl: any;
  imagetype: any;
  serviceOffered: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private uaParserService: UaParserService,
    private canonical: CanonicalService
  ) {
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Are you in search of affordable self storage units and
      awesome customer service? Check out our 3 convenient locations and call for your quote today!`
    });
    this.titleService.setTitle('Self Storage in Carroll County | Carroll County Storage');
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    this.receiveMessage();
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1) {
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation1();
    } else if ( this.locationId === '3' ) {
      this.fetchContactDetailsLocation3();
    }
  }

    public fetchContactDetailsLocation1() {
      this.heading = ``;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = ``;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchContactDetailsLocation3() {
      this.heading = ``;
      this.contactDetails = contactsLocation3;
      this.hoursDetails = hoursLocation3;
    }

    public fetchFeatureHead() {
      this.features = featuresHead;
    }

    public fetchStaticContent() {
      this.serviceOffered = serviceOffered;
    }

}
