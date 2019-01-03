import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
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
    this.window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactsVillage = contactsVillage;
    this.contactsMall = contactsMall;
  }


  public fetchHours() {
    this.hoursVillage = hoursVillage;
    this.hoursMall = hoursMall;
   }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

}
