import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
        contactsLocation4, hoursLocation4 } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';
import { LocationService } from '../services/location.service';

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
  serviceOffered: any;
  contactsLocation1:any;
  contactsLocation2:any;
  contactsLocation3:any;
  contactsLocation4:any;
  hoursLocation1:any;
  hoursLocation2:any;
  hoursLocation3:any;
  hoursLocation4:any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We have a wide variety of self storage units at multiple locations in the Maysville
      area! Call or check our rates online today!`
    });
    this.titleService.setTitle('Affordable Self Storage in Maysville | AA Secure Storage');
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    // this.receiveMessage();
    this.fetchContactDetails();
    this.fetchHours();
  }

  public fetchContactDetails(){
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation3 = contactsLocation3;
    this.contactsLocation4 = contactsLocation4;
  }

  public fetchHours(){
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation3 = hoursLocation3;
    this.hoursLocation4 = hoursLocation4;
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
  //   } else if ( this.locationId === '2' ) {
  //     this.fetchContactDetailsLocation2();
  //   } else if ( this.locationId === '3' ) {
  //     this.fetchContactDetailsLocation3();
  //   } else if ( this.locationId === '4' ) {
  //     this.fetchContactDetailsLocation4();
  //   }
  // }

    // public fetchContactDetailsLocation1() {
    //   this.heading = `730 Kenton Station Location`;
    //   this.contactDetails = contactsLocation1;
    //   this.hoursDetails = hoursLocation1;
    // }

    // public fetchContactDetailsLocation2() {
    //   this.heading = `751 Kenton Station Location`;
    //   this.contactDetails = contactsLocation2;
    //   this.hoursDetails = hoursLocation2;
    // }

    // public fetchContactDetailsLocation3() {
    //   this.heading = `Augusta Location`;
    //   this.contactDetails = contactsLocation3;
    //   this.hoursDetails = hoursLocation3;
    // }

    // public fetchContactDetailsLocation4() {
    //   this.heading = `113 McDonald Parkway`;
    //   this.contactDetails = contactsLocation4;
    //   this.hoursDetails = hoursLocation4;
    // }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

}
