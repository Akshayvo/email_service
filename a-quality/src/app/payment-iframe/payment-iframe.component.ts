import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1, contactsLocation2,} from '../data/contact';

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
      content: `Follow these simple instructions, and you'll be paying your rent in a matter of seconds! Have questions? Call our offices, and we'll be happy to help!`
    });
    this.titleService.setTitle('Pay Rent | A-Quality Storage');
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
    }
  }
}
