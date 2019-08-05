import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, feature } from '../data/home';
import { UaParserService } from '../../app/services/ua-parser.service';

import { slideShow } from '../data/view';


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
  imageBaseUrl: any;
  imagetype: any;
  slideShow: any;
  currentActive: any = 'HOME';


  constructor(
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We are Scotia's premiere self storage facility, with a wide variety of self storage unit sizes,
                and stellar customer service, all at an affordable price!`
    });
    this.titleService.setTitle('Affordable Storage Units Near Scotia, NY, 12302 | Scotia Storage');

    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

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
    this.fetchSlideShow();
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

public fetchSlideShow() {
  this.slideShow = slideShow;
}

public getImageUrl(imageName: String) {
  // const extension = this.imagetype.toLowerCase();
  return `${this.imageBaseUrl}/${imageName}.${this.imagetype}`;
}

}
