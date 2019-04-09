import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours, accesshours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, jumbotron} from '../data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  accesshours: any;
  featuresHead: any;
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  jumbotron: any;
  currentActive: any = 'HOME';

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our brand new, affordable self storage units are the perfect solution for your moving, downsizing, or business storage needs. Call to learn more today!`
    });
    this.titleService.setTitle('Storage Units in Cocoa, FL | Stor More Self Storage');
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
    this.fetchJumbotron();
    window.scrollTo(0, 0);
  }

  public fetchContactDetails() {
    this.contactDetails = contact;
  }

  public fetchHours() {
    this.hours = hours;
    this.accesshours = accesshours;
    
  }
  public fetchAccessHours() {
    this.accesshours = accesshours;
    
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

  public fetchJumbotron() {
    this.jumbotron = jumbotron;
  }

}
