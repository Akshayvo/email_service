import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          // contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
import { headingLocation1, headingLocation2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';


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
    ) {
      if (this.router.url.includes('/location/linden-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Linden Self Storage has over 650 state-of-the-art storage units and 115 outdoor
              RV and boat storage spaces ready to meet your storage needs!`
            });
            this.titleService.setTitle('Affordable Self Storage in Rochester | Linden Self Storage');
    } else if (this.router.url.includes('/location/macedon-storage')) {
           this.meta.addTag({
             name: 'description',
             content: ``
           });
           this.titleService.setTitle('Affordable Self Storage in Macedon | Linden Self Storage');
      }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/linden-storage')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/macedon-storage')) {
      this.fetchDetailsLocation2();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/linden-storage/reserveUnit'],
          { queryParams: { name: 'Linden Self Storage', currentTab: 'Reserve Unit' }});
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/macedon-storage/reserveUnit'],
          { queryParams: { name: 'Macedon Storage', currentTab: 'Reserve Unit' }});
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
