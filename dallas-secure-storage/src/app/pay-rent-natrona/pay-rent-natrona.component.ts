import { Component, OnInit } from '@angular/core';
import { contactsLocation1, contactsLocation3 } from '../data/contact';

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
    this.fetchContactLocation3();
  }
  public fetchContactLocation3() {
    this.contact = contactsLocation3;
  }
}
