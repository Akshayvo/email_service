import { Component, OnInit } from '@angular/core';
import { contactsLocation1, contactsLocation2, contactsLocation3 } from '../data/contact';

@Component({
  selector: 'app-pay-rent-florida',
  templateUrl: './pay-rent-florida.component.html',
  styleUrls: ['./pay-rent-florida.component.scss']
})
export class PayRentFloridaComponent implements OnInit {

  locationId: any;
  contact: any;

  constructor() { }

  ngOnInit() {
    this.dataupdate();
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
}
