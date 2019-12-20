import { Component, OnInit } from '@angular/core';
import {  contactsLocation3 } from '../data/contact';

@Component({
  selector: 'app-pay-rent-natrona',
  templateUrl: './pay-rent-natrona.component.html',
  styleUrls: ['./pay-rent-natrona.component.scss']
})
export class PayRentNatronaComponent implements OnInit {
  contact: any;
  constructor() { }

  ngOnInit() {
    this.dataupdate();
  }
public dataupdate() {
  this.contact = contactsLocation3;
  }
}
