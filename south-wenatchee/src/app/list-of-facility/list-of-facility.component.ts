import { Component, OnInit } from '@angular/core';
import { contactsLocation1,
  hoursLocation1,
  contactsLocation2,
  contactsLocation3,
  contactsLocation4,
  hoursLocation2,
  hoursLocation3, hoursLocation4 } from '../data/contact';

@Component({
  selector: 'app-list-of-facility',
  templateUrl: './list-of-facility.component.html',
  styleUrls: ['./list-of-facility.component.scss']
})
export class ListOfFacilityComponent implements OnInit {

  contactsBrookside: any;
  contactsAndrews: any;
  hoursBrookside: any;
  contactsMontgomery: any;
  contactsMiddletown: any;
  hoursAndrews: any;
  hoursMontgomery: any;
  hoursMiddletown: any;
  contactsLocation1: any;
  contactsLocation2: any;
  hoursLocation1: any;
  hoursLocation2: any;

  constructor() { }

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
  }

  public fetchContactBrookside() {
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    
  }

  public fetchHoursBrookside() {
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    
  }

}
