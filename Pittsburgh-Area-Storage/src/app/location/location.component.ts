import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
import { headingLocation1, headingLocation3 } from '../data/location';
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
  specialRow: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    ) {
      if (this.router.url.includes('/location/movin-on-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Welcome to Movin' On Storage Center of Charleston, WV!
                        We have a wide selection of storage units and Penske truck rentals!`
            });
            this.titleService.setTitle('Storage Units in Charleston, WV | Movin\' On  Storage Center');
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
          this.meta.addTag({
            name: 'description',
            content: `We offer a wide selection of affordable self storage units and
                      stellar customer service right in your backyard! Contact us to learn more!`
          });
          this.titleService.setTitle('Storage in Natrona Heights | Natrona Heights Self Storage');
    }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/movin-on-storage')) {
        this.fetchDetailsLocation1();
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
      this.fetchDetailsLocation3();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/movin-on-storage/reserveUnit'],
          { queryParams: { name: 'Movin\' On  Storage Center', currentTab: 'Reserve Unit' }});
  } else if ( this.locationId === 3) {
    this.router.navigate(['/location/natrona-heights-self/reserveUnit'],
          { queryParams: { name: 'Natrona Heights Self Storage', currentTab: 'Reserve Unit' }});
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
      this.specialRow  = `Due to COVID-19, our temporary office hours are: Mon, Wed, and Friday
      9:00AM - 1:00PN. We can be contacted by phone if you have any questions. Sorry for any
      inconvenience this might cause anyone. Payments can still be made online, by mail or simply
      call. Your units will still be available to you!`;
    }

   public fetchDetailsLocation3() {
     this.name = headingLocation3;
     this.locationId = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
     this.specialRow  = `Due to COVID-19, our temporary office hours are:  Monday, Wednesday, Friday
     10:00AM - 2:00PM. Sorry for any inconvenience this might cause anyone. Payments can still be made
     online, by mail or simply call. Your units will still be available to you!`;
   }
}
