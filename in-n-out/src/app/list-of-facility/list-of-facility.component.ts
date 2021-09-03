import { Component, OnInit } from "@angular/core";
import {
  contactsLocation1,
  hoursLocation1,
  contactsLocation2,
  contactsLocation3,
  contactsLocation4,
  contactsLocation5,
  hoursLocation2,
  hoursLocation3,
  hoursLocation4,
  hoursLocation5,
} from "../data/contact";

@Component({
  selector: "app-list-of-facility",
  templateUrl: "./list-of-facility.component.html",
  styleUrls: ["./list-of-facility.component.scss"],
})
export class ListOfFacilityComponent implements OnInit {
  contactsBrookside: any;
  contactsAndrews: any;
  hoursBrookside: any;
  contactsMontgomery: any;
  contactsMiddletown: any;
  contactsWoodland: any;
  hoursAndrews: any;
  hoursMontgomery: any;
  hoursMiddletown: any;
  hoursWoodland: any;

  constructor() {}

  ngOnInit() {
    this.fetchContactBrookside();
    this.fetchHoursBrookside();
  }

  public fetchContactBrookside() {
    this.contactsBrookside = contactsLocation2;
    this.contactsAndrews = contactsLocation1;
    this.contactsMontgomery = contactsLocation3;
    this.contactsMiddletown = contactsLocation4;
    this.contactsWoodland = contactsLocation5;
  }

  public fetchHoursBrookside() {
    this.hoursBrookside = hoursLocation2;
    this.hoursAndrews = hoursLocation1;
    this.hoursMontgomery = hoursLocation3;
    this.hoursMiddletown = hoursLocation4;
    this.hoursWoodland = hoursLocation5;
  }
}
