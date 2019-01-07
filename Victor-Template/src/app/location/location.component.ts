import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation2, hoursLocation1, contactsLocation1, hoursLocation2  } from '../data/contact';
import { tabs } from '../data/location';
import { Title } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  currentTab: any;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    ) {
      this.titleService.setTitle('Location-PageTitle');
    }

  ngOnInit() {
    this.fetchTabs();
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/location1')) {
        this.fetchDetailsLocation1();
    } else {
      this.fetchDetailsLocation2();
    }
 }

  public fetchDetailsLocation1() {
      this.name = 'Location1';
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
    }

   public fetchDetailsLocation2() {
    this.name = 'Location2';
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
   }

  public fetchTabs() {
    this.tabs = tabs;
  }
}
