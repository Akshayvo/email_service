import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation3, hoursLocation3, socialLinks
          } from '../data/contact';
import { tabs, tabs1 } from '../data/location';
import { headingLocation1, headingLocation3 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  name: any;
  locationId: number;
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
    private dataSharingService: DataSharingService,

    ) {
      if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
            this.meta.addTag({
              name: 'description',
              content: ``
            });
            this.titleService.setTitle('');
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/affordable-secure-storage-floral-city')) {
        this.fetchDetailsLocation1();
    } else  if (this.router.url.includes('/location/beck-road-storage'))  {
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
      this.router.navigate(['/location/affordable-secure-storage-floral-city/reserveUnit']);
    } else if ( this.locationId === 3) {
      this.router.navigate(['/location/beck-road-storage/reserveUnit']);
    }
   }


}
