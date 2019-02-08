import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contacts1, contacts2, hours1, hours2 } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ViewChild(SelectLocationComponent) gettingLocation;
  contacts1: object;
  contacts2: object;
  hours1: object;
  hours2: object;
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
      content: ``
    });
    this.titleService.setTitle('');
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contacts1 = contacts1;
    this.contacts2 = contacts2;
  }

  public fetchHours() {
    this.hours1 = hours1;
    this.hours2 = hours2;
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

}
