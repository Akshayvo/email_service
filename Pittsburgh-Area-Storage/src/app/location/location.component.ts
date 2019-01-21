import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          } from '../data/contact';
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

  public fetchDetailsLocation1() {
      this.name = 'Movin\' On Storage Center';
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = 'Shaler Self Storage';
     this.locationId = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }

   public fetchDetailsLocation3() {
     this.name = 'Natrona Heights Self Storage';
     this.locationId = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   }
}
