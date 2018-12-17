import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
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
  carousel: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Victor Self Storage offers a wide variety of self storage units with the
      security, convenience, and stellar customer service you expect, all at an affordable price! Reserve today!
      `
    });
    this.titleService.setTitle('Storage Units Near Victor, NY, 14564 | Victor Self Storage');
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchStaticContent();
    this.fetchFeatureHead();
    this.carouselData();
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

  public carouselData() {
    this.carousel = homeCarousel;
  }

}
