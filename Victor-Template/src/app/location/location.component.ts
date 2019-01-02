import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsMall, hoursMall, contactsVillage, hoursVillage  } from '../data/contact';
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
    if (this.router.url.includes('/location/village')) {
        this.fetchDetailsVillage();
    } else {
      this.fetchDetailsMall();
    }
 }

  public fetchDetailsVillage() {
      this.name = 'village';
      this.contacts = contactsVillage;
      this.hours = hoursVillage;
    }

   public fetchDetailsMall() {
    this.name = 'mall';
     this.contacts = contactsMall;
     this.hours = hoursMall;
   }

  public fetchTabs() {
    this.tabs = tabs;
  }
}
