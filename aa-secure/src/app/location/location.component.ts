import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2,
          contactsLocation3, hoursLocation3,
          contactsLocation4, hoursLocation4
          } from '../data/contact';
import { tabs, tabs1} from '../data/location';
import { headingLocation1, headingLocation2, headingLocation3, headingLocation4 } from '../data/location';
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
      if (this.router.url.includes('/location/730-kenton-station')) {
            this.meta.addTag({
              name: 'description',
              content: `Our 730 Kenton Station Location is fully-fenced and paved for added
              convenience! Check our extremely affordable rates here!`
            });
            this.titleService.setTitle('Affordable Self Storage in Maysville | AA Secure Storage');
    } else if (this.router.url.includes('/location/751-kenton-station')) {
           this.meta.addTag({
             name: 'description',
             content: `We have a large selection of high-quality, well-maintained self
             storage units at extremely affordable prices!`
           });
           this.titleService.setTitle('');
    } else  if (this.router.url.includes('/location/augusta'))  {
          this.meta.addTag({
            name: 'description',
            content: `Our Augusta location has a large selection of storage units with very easy access right off of`
          });
          this.titleService.setTitle('Affordable Self Storage in Augusta | AA Secure Storage');
    } else  if (this.router.url.includes('/location/113-mcDonald-parkway'))  {
      this.meta.addTag({
        name: 'description',
        content: `Our 113 McDonald Parkway location is completely fenced in, and paved for additional
        convenience! Call today for your reservation!`
      });
      this.titleService.setTitle('Affordable Storage Units in Maysville | AA Secure Storage');
}
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/730-kenton-station')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/751-kenton-station')) {
      this.fetchDetailsLocation2();
    } else  if (this.router.url.includes('/location/augusta'))  {
      this.fetchDetailsLocation3();
    } else  if (this.router.url.includes('/location/113-mcDonald-parkway'))  {
      this.fetchDetailsLocation4();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/730-kenton-station/reservations'],
          { queryParams: { name: '730 Kenton Station Location', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null }
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/751-kenton-station/reservations'],
          { queryParams: { name: 'Location2', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null}
          );
  } else if ( this.locationId === 3) {
    this.router.navigate(['/location/augusta/reservations'],
          { queryParams: { name: 'Location3', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null}
          );
  } else if ( this.locationId === 4) {
    this.router.navigate(['/location/113-mcDonald-parkway/reservations'],
          { queryParams: { name: 'Location3', currentTab: 'Reserve Unit' },
          skipLocationChange: true, queryParamsHandling: null}
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation2;
      this.hours = hoursLocation1;
      this.tabs = tabs;
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
     this.contacts = contactsLocation2;
     this.hours = hoursLocation3;
     this.tabs = tabs;
   }

   public fetchDetailsLocation4() {
    this.name = headingLocation4;
    this.locationId = 4;
    this.contacts = contactsLocation2;
    this.hours = hoursLocation4;
    this.tabs = tabs1;
  }
}
