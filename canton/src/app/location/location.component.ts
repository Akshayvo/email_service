import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
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
      if (this.router.url.includes('/location/fohl-street-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Our Fohl Street location offers an on-site manager, wide variety of self storage units, and RV parking spaces! We are Canton's #1 self storage choice!`
            });
            this.titleService.setTitle('Affordable Storage in Canton, Ohio | Self Storage of Canton');
    } else if (this.router.url.includes('/location/louisville-self-storage')) {
           this.meta.addTag({
             name: 'description',
             content: `We offer affordable, clean, well-maintained units, and excellent customer service to Louisville, Hartville, Canton, and the surrounding communities!`
           });
           this.titleService.setTitle('Affordable Storage Units | Louisville Self Storage');
    } else  if (this.router.url.includes('/location/lincoln-street-storage'))  {
          this.meta.addTag({
            name: 'description',
            content: `Are you looking for self storage in an affordable, well-lit, fully-fenced facility? Lincoln Street Storage has you covered! `
          });
          this.titleService.setTitle('Affordable Storage Units in Canton | Lincoln Street Storage');
    }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/fohl-street-storage')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/louisville-self-storage')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/lincoln-street-storage'))  {
      this.fetchDetailsLocation3();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/fohl-street-storage/reserveUnit'],
          { queryParams: { name: 'fohl street storage', currentTab: 'Reserve Unit' }});
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/louisville-self-storage/reserveUnit'],
          { queryParams: { name: 'Location2', currentTab: 'Reserve Unit' }});
  } else if ( this.locationId === 3) {
    this.router.navigate(['/location/lincoln-street-storage/reserveUnit'],
          { queryParams: { name: 'Location3', currentTab: 'Reserve Unit' }});
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

   public fetchDetailsLocation3() {
     this.name = headingLocation3;
     this.locationId = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   }
}
