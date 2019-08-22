import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1,
          contactsLocation3, hoursLocation3 } from '../data/contact';
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
  features: any;
  serviceOffered: any;
  contactsLocation1:any;
  contactsLocation3:any;
  hoursLocation1:any;
  hoursLocation3:any;


  
  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pittsburgh Area Storage Centers manages several locations with high-quality,
                well-maintained, affordable self storage units and offers stellar customer service!`
    });
    this.titleService.setTitle('Affordable Storage Units | Pittsburgh Area Storage Centers');
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
    this.contactsLocation3 = contactsLocation3;
  }
  public fetchHours(){
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation3 = hoursLocation3;
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
  }

}
