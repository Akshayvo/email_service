import { Component, OnInit } from '@angular/core';
import { contactsLocation1,
  hoursLocation1,
  contactsLocation2,
  hoursLocation2,
  } from '../data/contact';

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

  constructor() { }

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
  }

  public fetchContactBrookside() {
    this.contactsBrookside = contactsLocation1;
    this.contactsAndrews = contactsLocation2;
    
  }

  public fetchHoursBrookside() {
    this.hoursBrookside = hoursLocation1;
    this.hoursAndrews = hoursLocation2;
    
  }

}
