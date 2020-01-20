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
    // this.dataupdate();
    this.fetchContactLocation1();
  }

  public fetchContactLocation1() {
    this.contact = contactsLocation1;
  }

  // public dataupdate() {
  //   if ( this.locationId === '1' ) {
  //     this.contact = contactsLocation1;
  //   } else if ( this.locationId === '3' ) {
  //     this.contact = contactsLocation3;
  //   }
  // }
}
