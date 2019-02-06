import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, blurbContent, blurbHeading} from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresHead: any;
  featuresList: any;
  blurbHeading: any;
  blurbContent: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  currentActive: any = 'HOME';

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'home-meta-name',
      content: `home-meta-content`
    });
    this.titleService.setTitle('Home-PageTitle');
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
    this.fetchBlurbtext();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchBlurbtext() {
    this.blurbContent = blurbContent;
    this.blurbHeading = blurbHeading;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }

  public fetchFeature () {
    this.feature = feature;
  }

}
