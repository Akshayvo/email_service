import { Component, OnInit } from '@angular/core';
import { contactsLocation1, hoursLocation1, contactsLocation2, hoursLocation2 } from '../data/contact';
import { heading1,heading2 } from '../data/location';

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
  heading1:any;
  heading2:any;
  constructor() { }

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
    this.fetchHeading();
  }

  public fetchContactBrookside() {
    this.contactsBrookside = contactsLocation2;
    this.contactsAndrews = contactsLocation1;      
  }

  public fetchHoursBrookside() {
    this.hoursBrookside = hoursLocation2;
    this.hoursAndrews = hoursLocation1;      
  }

  public fetchHeading(){
    this.heading1=heading1;
    this.heading2=heading2;
  }

}
