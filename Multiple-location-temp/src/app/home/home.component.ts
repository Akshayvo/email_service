import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1,
         contactsLocation2, hoursLocation2,
         contactsLocation3, hoursLocation3  } from '../data/contact';
import { headingLocation1, headingLocation2, headingLocation3 } from '../data/location';
import { featuresHead, serviceOffered } from '../data/home';
import { LocationService } from '../services/location.service';
import { Router } from '@angular/router';


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

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private router: Router,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'home-meta-name',
      content: `home-meta-content`
    });
    this.titleService.setTitle('Home-PageTitle');
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    this.window.scrollTo(0, 0);
    this.receiveMessage();
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.fetchContactDetailsLocation1();
    } else if ( this.locationId === '2' ) {
      this.fetchContactDetailsLocation2();
    } else if ( this.locationId === '3' ) {
      this.fetchContactDetailsLocation3();
    }
  }

  public navigateToStorageUnit() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.router.navigate(['/location/location1/storageUnits'],
            { queryParams: { name: 'Location 1', currentTab: 'Storage Units' }});
    } else if ( this.locationId === '2' ) {
      this.router.navigate(['/location/location2/storageUnits'],
            { queryParams: { name: 'Location 2', currentTab: 'Storage Units' }});
    } else if ( this.locationId === '3' ) {
      this.router.navigate(['/location/location3/storageUnits'],
            { queryParams: { name: 'Location 3', currentTab: 'Storage Units' }});
    }
  }

  public navigateToReserveUnit() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.router.navigate(['/location/location1/reserveUnit'],
            { queryParams: { name: 'Location 1', currentTab: 'Reserve Unit' }});
    } else if ( this.locationId === '2' ) {
      this.router.navigate(['/location/location2/reserveUnit'],
            { queryParams: { name: 'Location 2', currentTab: 'Reserve Unit' }});
    } else if ( this.locationId === '3' ) {
      this.router.navigate(['/location/location3/reserveUnit'],
            { queryParams: { name: 'Location 3', currentTab: 'Reserve Unit' }});
    }
  }

    public fetchContactDetailsLocation1() {
      this.heading = headingLocation1;
      this.contactDetails = contactsLocation1;
      this.hoursDetails = hoursLocation1;
    }

    public fetchContactDetailsLocation2() {
      this.heading = headingLocation2;
      this.contactDetails = contactsLocation2;
      this.hoursDetails = hoursLocation2;
    }

    public fetchContactDetailsLocation3() {
      this.heading = headingLocation3;
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
