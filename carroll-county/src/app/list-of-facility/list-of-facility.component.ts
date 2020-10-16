import { Component, OnInit } from '@angular/core';
import { contactsLocation1,
  hoursLocation1,
  contactsLocation2,
  contactsLocation3,
  hoursLocation2,
  hoursLocation3,  } from '../data/contact';

@Component({
  selector: 'app-list-of-facility',
  templateUrl: './list-of-facility.component.html',
  styleUrls: ['./list-of-facility.component.scss']
})
export class ListOfFacilityComponent implements OnInit {

  contactsLocation1: any;
  contactsLocation2: any;
  contactsLocation3: any;
  hoursLocation1: any;
  hoursLocation2: any;
  hoursLocation3: any;

  constructor() { }

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
  }

  public fetchContactBrookside() {
    this.contactsLocation2 = contactsLocation2;
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation3 = contactsLocation3;
  }

  public fetchHoursBrookside() {
    this.hoursLocation2 = hoursLocation2;
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation3 = hoursLocation3;
  }

}
