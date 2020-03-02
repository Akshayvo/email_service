import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation3, hoursLocation3, socialLinks
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
  socialLinks: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    ) {
      if (this.router.url.includes('/location/inez-storage')) {
            this.meta.addTag({
              name: 'description',
              content: `Inez Storage is a storage facility that provides storage units in Inez TX.
                        We offer boat, climate controlled, RV, and self storage at our storage facility.`
            });
            this.titleService.setTitle('Self Storage Facility in Inez TX | Inez Storage');
    } else  if (this.router.url.includes('/location/beck-road-storage'))  {
          this.meta.addTag({
            name: 'description',
            content: `Beck Road Storage is a storage facility that provides boat & RV storage in
                      Victoria TX. We offer a variety of storage unit sizes at our storage facility.`
          });
          this.titleService.setTitle('Boat & RV Storage in Victoria TX | Beck Road Storage');
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
     else  if (this.router.url.includes('/location/beck-road-storage'))  {
      this.fetchDetailsLocation3();
    }
 }



  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
      this.socialLinks = socialLinks;
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
      this.router.navigate(['/location/beck-road-storage'],
            { queryParams: { name: 'Beck Road Storage', currentTab: 'Reserve Unit' }});
    }
   }


}
