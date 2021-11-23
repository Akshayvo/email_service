import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { homePageScript } from '../data/script';
import { contact, hours } from '../data/contact';
import { featuresList, aboutUs, gettingStarted, feature, blurb} from '../data/home';
import { CanonicalService } from '../services/canonical.service';

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
  featuresList: any;
  aboutUs: any;
  serviceOffered: any;
  gettingStarted: any;
  script: any;
  feature: any;
  currentActive: any = 'HOME';


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.canonical.create();
    // this.canonical.addTag({

    // })
    this.meta.addTag({
      name: 'description',
      content: `390 Self Storage offers the best storage deals in Rochester NY. Keep your things safe with
      our climate-controlled self-storage units. Contact us today!`
    });
    // this.meta.addTag({
    //   name: 'google-site-verification',
    //   content: `8reQI1RlweQXWnW0L4a-K0geManCCgtD4XtEIPt9Cd0`
    // });
    this.titleService.setTitle('Self Storage Units Rochester NY, Climate Controlled Storage Gates');
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

  public fetchScript() {
    this.script = homePageScript;
  }

  public fetchHours() {
    this.hours = hours;
  }

  public fetchFeatures() {
    this.featuresList = featuresList;
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
