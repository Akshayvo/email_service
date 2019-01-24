import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { headingLocation1, headingLocation2, headingLocation3 } from '../data/location';
import { contactsLocation1, hoursLocation1,
         contactsLocation2, hoursLocation2,
         contactsLocation3, hoursLocation3,  } from '../data/contact';
import { tabs } from '../data/location';
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
      if (this.router.url.includes('/location/location1')) {
        this.meta.addTag({
          name: 'location1-meta-name',
          content: `location1-meta-content`
        });
        this.titleService.setTitle('Location1-PageTitle');
} else if (this.router.url.includes('/location/location2')) {
       this.meta.addTag({
         name: 'location2-meta-name',
         content: `location2-meta-content`
       });
       this.titleService.setTitle('Location2-PageTitle');
} else  if (this.router.url.includes('/location/location3'))  {
      this.meta.addTag({
        name: 'location3-meta-name',
        content: `location3-meta-content`
      });
      this.titleService.setTitle('Location3-PageTitle');
}
    }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/location2')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/location3'))  {
      this.fetchDetailsLocation3();
    }
  }

  public navigateToReserve() {
    if ( this.locationId === 1 ) {
      this.router.navigate(['/location/location1/reserveUnit'],
            { queryParams: { name: 'Location 1', currentTab: 'Reserve Unit' }});
    } else if ( this.locationId === 2 ) {
      this.router.navigate(['/location/location2/reserveUnit'],
            { queryParams: { name: 'Location 2', currentTab: 'Reserve Unit' }});
    } else if ( this.locationId === 3) {
      this.router.navigate(['/location/location3/reserveUnit'],
            { queryParams: { name: 'Location 3', currentTab: 'Reserve Unit' }});
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

public fetchDetailsLocation3() {
 this.name = headingLocation3;
 this.locationId = 3;
 this.contacts = contactsLocation3;
 this.hours = hoursLocation3;
 this.tabs = tabs;
}
}
