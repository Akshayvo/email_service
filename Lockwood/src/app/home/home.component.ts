import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, blurbHeading, blurbText } from '../data/home';

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
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  blurbHeading: string;
  blurbText: string;
  currentActive: any = 'HOME';

  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We offer high quality self storage units, vehicle storage,
                and a tenant-use truck to Oviedo and nearby communities!`
    });
    this.titleService.setTitle('Storage Units Near Oviedo, FL | Lockwood Self Storage');
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
    this.fetchblurbData();
    window.scrollTo(0, 0);
  }

  public fetchblurbData() {
    this.blurbText = blurbText;
    this.blurbHeading = blurbHeading;

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
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
