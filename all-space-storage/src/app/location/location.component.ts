import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          contactsLocation4,  hoursLocation4 } from '../data/contact';
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
  id: number;
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
      this.meta.addTag({
        name: 'description',
        content: `Are you looking for a well maintained, fully lit self
                  storage facility with great customer service and affordable pricing? We've got you covered!`
      });
      this.titleService.setTitle('Storage Units | AllSpace Storage');
    }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/highland')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/lake-katrine'))  {
      this.fetchDetailsLocation3();
    } else {
      this.fetchDetailsLocation4();
    }
 }

  public fetchDetailsLocation1() {
      this.name = 'Poughkeepsie';
      this.id = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = 'Highland';
     this.id = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }

   public fetchDetailsLocation3() {
     this.name = 'Lake Katrine';
     this.id = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   }

   public fetchDetailsLocation4() {
    this.name = 'Pawling';
    this.id = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs;
  }
}
