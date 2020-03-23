import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
import { headingLocation1, headingLocation2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
  currentTab: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    ) {
      if (this.router.url.includes('/location/dallas-secure-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `We are your locally owned and operated self storage solution! Dallas Secure Storage offers
                        affordable, well-maintained units, and customerservice with a smile!`
            });
            this.titleService.setTitle('Self Storage Units in Dallas, Oregon | Dallas Secure Storage');
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
          this.meta.addTag({
            name: 'description',
            content: `Check out our extremely affordable rates on secure, well-maintained self
                      storage units! Start de-cluttering your home or worksite today!V`
          });
          this.titleService.setTitle('Self Storage in Dallas, Oregon | Dallas Secure Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
    }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/dallas-secure-storage')) {
        this.fetchDetailsLocation1();
    } else  if (this.router.url.includes('/location/godsey-secure-storage'))  {
      this.fetchDetailsLocation2();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/dallas-secure-storage/reserveUnit']);
  } else if ( this.locationId === 2) {
    this.router.navigate(['/location/godsey-secure-storage/reserveUnit']);
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
    }



   public fetchDetailsLocation2() {
     this.name = headingLocation2;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }
}
