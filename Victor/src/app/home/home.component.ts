import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
import { featuresHead, serviceOffered, homeCarousel } from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactsVillage: any;
  contactsMall: any;
  hoursVillage: any;
  hoursMall: any;
  features: any;
  serviceOffered: any;
  currentActive: any = 'HOME';
  carousel: any;
   
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Catskill Self Storage has your self storage unit, packing supplies,
       and U-Haul truck rental needs covered! Serving the Catskill community since 2003.`
    });
    this.titleService.setTitle('Affordable Storage Units Near Catskill , NY | 12414 - Catskill Self Storage');
  }

  public navigate(location) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchStaticContent();
    this.fetchFeatureHead();
    this.carouselData();
  }

  public fetchContactDetails() {
    this.contactsVillage = contactsVillage;
    this.contactsMall = contactsMall;
  }
  

  public fetchHours() {
    this.hoursVillage = hoursVillage;
    this.hoursMall = hoursMall;
   }

  public fetchFeatureHead(){
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

  public carouselData() {
    this.carousel = homeCarousel;
  }

}
