import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { contact, hours } from '../data/contact';
import { environment } from "../../environments/environment";
import { featuresList, jumbotron, aboutUs, gettingStarted, feature, blurb} from '../data/home';

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
  jumbotron:any;
  serviceOffered: any;
  gettingStarted: any;
  feature: any;
  currentActive: any = 'HOME';


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you looking for affordable units and service with a smile? Linden Self Storage is one of 3 locations in Rochester with great rates and awesome service!`
    });
    this.titleService.setTitle('Affordable Self Storage in Rochester | Linden Self Storage');
  }

  public navigate(location: any) {
    // this.router.navigate([location]); 
    if (
      location === "/view-rates" ||
      location === "/storage-tips" ||
      location === "/reserve-unit"
    ) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]);
    }
  }

  ngOnInit() {
    this.fetchContactDetails();
    this.fetchHours();
    this.fetchFeatures();
    this.fetchStaticContent();
    this.fetchFeature();
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
    this.blurb = blurb;
  }

  public fetchStaticContent() {
    this.aboutUs = aboutUs;
    this.gettingStarted = gettingStarted;
    this.jumbotron = jumbotron;
  }
  public fetchFeature () {
    this.feature = feature;
  }

}
