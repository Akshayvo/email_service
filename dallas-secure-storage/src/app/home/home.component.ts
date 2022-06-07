import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2 } from '../data/contact';
import { featuresHead, serviceOffered } from '../data/home';
import { LocationService } from '../services/location.service';
import { aboutusGallery } from '../data/galleryImage';
import { CanonicalService } from '../services/canonical.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactDetails: any;
  hoursDetails: any;
  locationId: any;
  features: any;
  serviceOffered: any;
  contactsLocation1: any;
  contactsLocation3: any;
  hoursLocation1: any;
  hoursLocation3: any;
  aboutusGallery: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService,
    private canonical: CanonicalService,
  ) {
    console.log(this.canonical.create());
    this.meta.addTag({
      name: 'description',
      content: `Affordable Self Storage Units in Dallas, Oregon | Dallas Secure Storage`
    });
    this.titleService.setTitle('Affordable Self Storage in Dallas | Dallas Secure Storage');
    
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchFeatureHead();
    window.scrollTo(0, 0);
    // this.receiveMessage();
    this.fetchContactDetails();
    this.fetchHours();
    this.galleryImages();

  }

  public fetchContactDetails() {
    this.contactsLocation1 = contactsLocation1;
    this.contactsLocation3 = contactsLocation2;
  }
  public fetchHours() {
    this.hoursLocation1 = hoursLocation1;
    this.hoursLocation3 = hoursLocation2;
  }
  public galleryImages() {
    this.aboutusGallery = aboutusGallery;
  }

  public fetchFeatureHead() {
    this.features = featuresHead;
  }

  public fetchStaticContent() {
    this.serviceOffered = serviceOffered;
  }

}
