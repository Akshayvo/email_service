import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1, contactsLocation2, contactsLocation3, } from '../data/contact';

@Component({
  selector: 'app-payment-iframe',
  templateUrl: './payment-iframe.component.html',
  styleUrls: ['./payment-iframe.component.scss']
})
export class PaymentIframeComponent implements OnInit {

  locationId: any;
  contact: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pay your rent for any of the 4 Self Storage Facility right here!
      Simply follow the instructions or call your facility to learn how!`
    });
    this.titleService.setTitle('Pay Rent | Self Storage Facility');
  }

  ngOnInit() {
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
      this.contact = contactsLocation1;
    } else if ( this.locationId === '2' ) {
      this.contact = contactsLocation2;
    } else if ( this.locationId === '3' ) {
      this.contact = contactsLocation3;
    }
  }
}
