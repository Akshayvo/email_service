import { Component, OnInit } from '@angular/core';
import { contactsLocation1,
  hoursLocation1,
  contactsLocation2,
  contactsLocation3,
  contactsLocation4,
  hoursLocation2,
  hoursLocation3, hoursLocation4 ,hoursLocation1AcessHours,hoursLocation2AcessHours} from '../data/contact';

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
  accessBrookside: any;
  accessAndrews: any;
  accessMontgomery: any;
  accessMiddletown: any;


  constructor() { }

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
    this.fetchAccessBrookside();
  }

  public fetchContactBrookside() {
    this.contactsBrookside = contactsLocation2;
    this.contactsAndrews = contactsLocation1;
    this.contactsMontgomery = contactsLocation3;
    this.contactsMiddletown = contactsLocation4;
  }

  public fetchHoursBrookside() {
    this.hoursBrookside = hoursLocation2;
    this.hoursAndrews = hoursLocation1;
    this.hoursMontgomery = hoursLocation3;
    this.hoursMiddletown = hoursLocation4;
  }

  public fetchAccessBrookside() {
    this.accessBrookside = hoursLocation1AcessHours;
    this.accessAndrews = hoursLocation2AcessHours;
  }


}
