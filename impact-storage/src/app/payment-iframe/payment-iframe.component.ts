import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1} from '../data/contact';

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
      content: `Pay your rent for any of the 4 Impact Self Storage right here!
      Simply follow the instructions or call your facility to learn how!`
    });
    this.titleService.setTitle('Pay Rent | Impact Self Storage');
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
    } 
  }
}
