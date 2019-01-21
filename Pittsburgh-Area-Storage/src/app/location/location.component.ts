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
      if (this.router.url.includes('/location/movin-on-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Our Route 55 Poughkeepsie location has 24 hour access available, pin-code activated gates,
                        and easy online auto-pay for your convenience!`
            });
            this.titleService.setTitle('Storage Units in Poughkeepsie, NY | AllSpace Storage');
    } else if (this.router.url.includes('/location/shaler-self')) {
           this.meta.addTag({
             name: 'description',
             content: `Our Highland location is fully lit, has boxes and moving supplies, pin-code
                       activated gates and easy online auto-pay for your convenience!`
           });
           this.titleService.setTitle('Convenient Storage Units in Highland | AllSpace Storage');
    } else  if (this.router.url.includes('/location/natrona-heights-self'))  {
          this.meta.addTag({
            name: 'description',
            content: `Are you looking for well-maintained, affordable self storage units near Lake Katrine, NY?
                      AllSpace Storage has your storage needs covered!`
          });
          this.titleService.setTitle('Storage Units In Lake Katrine, NY | AllSpace Storage');
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
      this.id = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = 'Shaler Self Storage';
     this.id = 2;
     this.contacts = contactsLocation2;
     this.hours = hoursLocation2;
     this.tabs = tabs;
   }

   public fetchDetailsLocation3() {
     this.name = 'Natrona Heights Self Storage';
     this.id = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   }
}
