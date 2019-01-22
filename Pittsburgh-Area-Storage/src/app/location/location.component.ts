import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs } from '../data/location';
import { headingLocation1, headingLocation2, headingLocation3 } from '../data/location';
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
      if (this.router.url.includes('/location/movin-on-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Welcome to Movin' On Storage Center of Charleston, WV!
                        We have a wide selection of storage units and Penske truck rentals!`
            });
            this.titleService.setTitle('Storage Units in Charleston, WV | Movin\' On  Storage Center');
    } else if (this.router.url.includes('/location/shaler-self')) {
           this.meta.addTag({
             name: 'description',
             content: `Whether you're looking to clear a room for a family gathering or use our
                      seasonal vehicle parking, Shaler Self Storage has your self storage needs covered!`
           });
           this.titleService.setTitle('Storage Units in Alison Park, PA | Shaler Self Storage');
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
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/movin-on-storage')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/shaler-self')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
      this.fetchDetailsLocation3();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/movin-on-storage/reserveUnit'],
          { queryParams: { name: 'Movin\' On  Storage Center', currentTab: 'Reserve Unit' }});
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/shaler-self/reserveUnit'],
          { queryParams: { name: 'Shaler Self Storage', currentTab: 'Reserve Unit' }});
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
