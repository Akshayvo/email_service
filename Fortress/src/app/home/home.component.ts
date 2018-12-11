import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, feature } from '../data/home';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresList: any;
  aboutUs: any;
  feature: any;
  currentActive: any = 'HOME';


  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Fortress Mini Storage has been providing Orchards and
                Clifton with friendly, high quality customer service and convenient,
                clean self storage access all at an affordable price since 1989!`
    });
    this.titleService.setTitle('Family Owned Storage Units Near Vancouver, WA | Fortress Mini Storage');
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
  }

  public fetchFeature() {
    this.feature = feature;
  }
   public scroll(el: any) {
    el.scrollIntoView();
}
}
