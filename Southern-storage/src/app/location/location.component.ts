import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsRockyCreek, hoursRockyCreek,
         contactsAgricola, hoursAgricola,
         contactsBarton, hoursBarton } from '../data/contact';
import { tabs, tabsBarton } from '../data/location';
import { Title } from '@angular/platform-browser';
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
    private router: Router,
    private titleService: Title,
    ) {
      this.titleService.setTitle('');
    }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/rocky-creek')) {
        this.fetchDetailsRockyCreek();
    } else if (this.router.url.includes('/location/agricola')) {
      this.fetchDetailsAgricola();
    } else {
      this.fetchDetailsBarton();
    }
 }

  public fetchDetailsRockyCreek() {
      this.name = 'Rocky Creek';
      this.id = 0;
      this.contacts = contactsRockyCreek;
      this.hours = hoursRockyCreek;
      this.tabs = tabs;
    }

   public fetchDetailsAgricola() {
     this.name = 'Agricola';
     this.id = 1;
     this.contacts = contactsAgricola;
     this.hours = hoursAgricola;
     this.tabs = tabs;
   }

   public fetchDetailsBarton() {
     this.name = 'Barton';
     this.id = 2;
     this.contacts = contactsBarton;
     this.hours = hoursBarton;
     this.tabs = tabsBarton;
   }
}
