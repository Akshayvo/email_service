import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          contactsLocation4,  hoursLocation4,
          contactsLocation5, hoursLocation5 } from '../data/contact';
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
      if (this.router.url.includes('/location/poughkeepsie/arlington')) {
            this.meta.addTag({
              name: 'description',
              content: `Our Route 55 Poughkeepsie location has 24 hour access available, pin-code activated gates,
                        and easy online auto-pay for your convenience!`
            });
            this.titleService.setTitle('Storage Units in Poughkeepsie, NY | AllSpace Storage');
    } else if (this.router.url.includes('/location/poughkeepsie/hyde-park')) {
      this.meta.addTag({
        name: 'description',
        content: `Whether you own a home, rent an apartment, go to school or run a business,
        our Poughkeepsie/Hyde Park location can help you find the perfect storage unit for your needs!`
      });
      this.titleService.setTitle('Self Storage Units In Poughkeepsie, NY | AllSpace Storage');
    } else if (this.router.url.includes('/location/highland')) {
           this.meta.addTag({
             name: 'description',
             content: `Our Highland location is fully lit, has boxes and moving supplies, pin-code
                       activated gates and easy online auto-pay for your convenience!`
           });
           this.titleService.setTitle('Convenient Storage Units in Highland | AllSpace Storage');
    } else  if (this.router.url.includes('/location/lake-katrine'))  {
          this.meta.addTag({
            name: 'description',
            content: `Are you looking for well-maintained, affordable self storage units near Lake Katrine, NY?
                      AllSpace Storage has your storage needs covered!`
          });
          this.titleService.setTitle('Storage Units In Lake Katrine, NY | AllSpace Storage');
    } else {
          this.meta.addTag({
            name: 'description',
            content: `Are you looking for a well maintained, fully lit self storage facility with great
                      customer service and affordable pricing? We've got you covered!`
          });
          this.titleService.setTitle('Storage Units in Pawling, NY | AllSpace Storage');
    }
    }

  ngOnInit() {
    this.window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/poughkeepsie/arlington')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/highland')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/lake-katrine'))  {
      this.fetchDetailsLocation3();
    } else  if (this.router.url.includes('/location/pawling'))  {
      this.fetchDetailsLocation4();
    } else {
      this.fetchDetailsLocation5();
    }
 }

  public fetchDetailsLocation1() {
      this.name = 'Poughkeepsie/Arlington';
      this.id = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs;
    }

  public fetchDetailsLocation5() {
    this.name = 'Poughkeepsie/Hyde Park';
    this.id = 5;
    this.contacts = contactsLocation5;
    this.hours = hoursLocation5;
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
