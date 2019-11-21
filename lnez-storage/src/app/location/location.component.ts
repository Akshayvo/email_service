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

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    ) {
      if (this.router.url.includes('/location/inez-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `We offer both regular and climate-controlled self storage units in a variety of sizes, 
                        as well as parking for boats, RVs, and vehicles at affordable rate!`
            });
            this.titleService.setTitle('Affordable Self Storage & Parking in Inez | Inez Storage');
    } else  if (this.router.url.includes('/location/inezstorage-2'))  {
          this.meta.addTag({
            name: 'description',
            content: ``
          });
          this.titleService.setTitle('Inez storage 2');
    }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/inez-storage')) {
        this.fetchDetailsLocation1();
    } 
     else  if (this.router.url.includes('/location/inezstorage-2'))  {
      this.fetchDetailsLocation3();
    }
 }



  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
    }

  

   public fetchDetailsLocation3() {
     this.name = headingLocation3;
     this.locationId = 3;
     this.contacts = contactsLocation3;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   } 
   
   public navigateToReserve() {
    if ( this.locationId === 1 ) {
      this.router.navigate(['/location/inez-storage'],
            { queryParams: { name: 'Inez storage', currentTab: 'Reserve Unit' }});
    } else if ( this.locationId === 3) {
      this.router.navigate(['/location/inezstorage-2'],
            { queryParams: { name: 'Inez Storage 2', currentTab: 'Reserve Unit' }});
    }
   }


}
