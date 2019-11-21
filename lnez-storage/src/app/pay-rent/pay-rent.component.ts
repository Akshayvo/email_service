import { Component, OnInit } from '@angular/core';
import { contactsLocation1, contactsLocation3 } from '../data/contact';


@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss']
})
export class PayRentComponent implements OnInit {

  locationId: any;
  contact: any;

  constructor() { }

  ngOnInit() {
    this.dataupdate();
  }

  public dataupdate() {
    // if ( this.locationId === '1' || this.locationId === 1 ) {
    //   this.contact = contactsLocation1;
    // } else if ( this.locationId === '3' ) {
    //   this.contact = contactsLocation3;
    // }
    this.contact = contactsLocation1;
  }
}
