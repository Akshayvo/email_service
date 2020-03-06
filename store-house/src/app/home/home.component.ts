import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { contact, hours } from '../data/contact';
import { featuresHead, aboutUs,  gettingStarted, feature, blurb, featuresList} from '../data/home';
import { CanonicalService } from '../services/canonical.service';
import { script } from '../data/script';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactDetails: any;
  hours: any;
  featuresHead: any;
  blurb: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  script: any;
  featuresList: any;
  currentActive: any = 'HOME';


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `We provide high-quality, affordable self storage to residential,
                commercial and military self storage unit users. `
    });
    this.titleService.setTitle('Affordable Self Storage Near Fort Drum | The Store House');
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
    this.fetchScript();
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
    this.featuresHead = featuresHead;
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }

  public fetchScript() {
    this.script = script;
  }

}
