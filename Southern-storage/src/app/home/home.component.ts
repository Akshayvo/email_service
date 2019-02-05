import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsRockyCreek, hoursRockyCreek,
         contactsAgricola, hoursAgricola,
         contactsBarton, hoursBarton } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';
import {  SelectLocationComponent } from '../select-location/select-location.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild(SelectLocationComponent) gettingLocation;
  contactsRockyCreek: any;
  contactsBarton: any;
  contactsAgricola: any;
  hoursRockyCreek: any;
  hoursBarton: any;
  hoursAgricola: any;
  // contactDetails: any;
  // hoursDetails: any;
  // locationId: string;
  // heading: string;
  features: any;
  serviceOffered: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Southern Storage has 3 convenient locations serving Lucedale, Agricola and
                surrounding communities with quality storage units and great customer service!`
    });
    this.titleService.setTitle('Self Storage Units Near Lucedale, MS');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    // this.locationId = 0;
  }

  public fetchContactDetails() {
    this.contactsRockyCreek = contactsRockyCreek;
    this.contactsBarton = contactsBarton;
    this.contactsAgricola = contactsAgricola;
  }


  public fetchHours() {
    this.hoursRockyCreek = hoursRockyCreek;
    this.hoursAgricola = hoursAgricola;
    this.hoursBarton = hoursBarton;
   }

  // receiveMessage($event: any) {
  //   this.locationId = $event;
  //   console.log($event);
  //   if ( this.locationId === '0' ) {
  //     this.fetchContactDetailsAgricola();
  //   } else if ( this.locationId === '1' ) {
  //     this.fetchContactDetailsRockyCreek();
  //   } else if ( this.locationId === '2' ) {
  //     this.fetchContactDetailsBarton();
  //   }
  //   console.log(this.contactDetails);
  //   console.log(this.hoursDetails);

  // }

    // public fetchContactDetailsAgricola() {
    //   this.heading = `Southern Storage - Agricola`;
    //   this.contactDetails = contactsAgricola;
    //   this.hoursDetails = hoursAgricola;
    // }

    // public fetchContactDetailsRockyCreek() {
    //   this.heading = `Southern Storage - Rocky Creek`;
    //   this.contactDetails = contactsRockyCreek;
    //   this.hoursDetails = hoursRockyCreek;
    // }

    // public fetchContactDetailsBarton() {
    //   this.heading = `Southern Storage - Barton`;
    //   this.contactDetails = contactsBarton;
    //   this.hoursDetails = hoursBarton;
    // }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

}
