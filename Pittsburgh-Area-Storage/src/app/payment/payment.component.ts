import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';
import { contactsLocation1, contactsLocation2, contactsLocation3 } from '../data/contact';
import { payList } from '../data/pay-rent';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  locationId: any;
  contact: any;
  payList: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Click here to pay your rent online for Natrona Heights Self Storage,
                Shaler Self Storage or Movin' On Storage Center`
    });
    this.titleService.setTitle('Pay Rent Online');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.receiveMessage();
    this.fetchPayList();
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => {
      this.locationId = locationId;
      this.dataupdate();
    });
  }

  public dataupdate() {
    if ( this.locationId === '1' || this.locationId === 1 ) {
      this.contact = contactsLocation1;
    } else if ( this.locationId === '2' ) {
      this.contact = contactsLocation2;
    } else if ( this.locationId === '3' ) {
      this.contact = contactsLocation3;
    }
  }

  public fetchPayList() {
    this.payList = payList;
  }
}
