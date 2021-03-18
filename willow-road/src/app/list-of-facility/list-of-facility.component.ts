import { Component, OnInit } from '@angular/core';
import { contactsLocation1, hoursLocation1,
  contactsLocation2, hoursLocation2,
   } from '../data/contact';

@Component({
  selector: 'app-list-of-facility',
  templateUrl: './list-of-facility.component.html',
  styleUrls: ['./list-of-facility.component.scss']
})
export class ListOfFacilityComponent implements OnInit {

  contactsLocation1: any;
  contactsLocation2: any;
  hoursLocation1: any;
  hoursLocation2: any;
  hoursMontgomery: any;
  hoursMiddletown: any;

  constructor() { }

  ngOnInit() {
    this.fetchContactDetails();
  }

  public fetchContactDetails() {
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation2 = contactsLocation2;
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation2 = hoursLocation2;
    
  }

}
