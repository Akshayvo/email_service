import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          } from '../data/contact';
import { tabs } from '../data/location';
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
      if (this.router.url.includes('/location/little-falls-mini-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Little Falls Mini Storage`
            });
            this.titleService.setTitle('Self Storage in Little Falls | Little Falls Mini Storage');
    } else if (this.router.url.includes('/location/highway-27-mini-storage')) {
           this.meta.addTag({
             name: 'description',
             content: `Highway 27 Mini Storage offers 24 hour access to a variety of unit sizes,
             and is located conveniently on Route 27 in Pierz, Minnesota!`
           });
           this.titleService.setTitle('Affordable Storage Units in Pierz | Highway 27 Mini Storage - Pierz');
    }
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/little-falls-mini-storage')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/highway-27-mini-storage')) {
      this.fetchDetailsLocation2();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/little-falls-mini-storage/reserveUnit'],
          { queryParams: { name: 'little falls mini storage', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null }
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/highway-27-mini-storage/reserveUnit'],
          { queryParams: { name: 'Location2', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null}
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = headingLocation2;
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }
}
