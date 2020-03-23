import { Component, OnInit } from '@angular/core';
import { contactsLocation1, contactsLocation2 } from '../data/contact';

@Component({
  selector: 'app-pay-rent-natrona',
  templateUrl: './pay-rent-natrona.component.html',
  styleUrls: ['./pay-rent-natrona.component.scss']
})
export class PayRentNatronaComponent implements OnInit {
  locationId: any;
  contact: any;
  constructor() { }

  ngOnInit() {
    this.fetchContactLocation2();
  }
  public fetchContactLocation2() {
    this.contact = contactsLocation2;
  }
}
