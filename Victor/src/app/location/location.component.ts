import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contacts1, contacts2, hours1, hours2 } from '../data/contact';
import { tabs, tabsBarton } from '../data/location';
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
    private router: Router,
    private titleService: Title,
    private meta: Meta,
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/mall')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/village')) {
      this.fetchDetailsLocation2();
    }
 }

  public navigateToContact() {
   this.router.navigate(['contact']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/payment/mall'], { queryParams: { currentTab: '' }});
    } else if ( this.id === 1 ) {
      this.router.navigate(['/payment/village'], { queryParams: { currentTab: '' }});
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      // tslint:disable-next-line:max-line-length
      this.router.navigate(['/location/mall/reserveUnit'], { queryParams: { name: 'Mall', currentTab: 'Reserve Unit' }});
    } else if ( this.id === 1 ) {
      // tslint:disable-next-line:max-line-length
      this.router.navigate(['/location/village/reserveUnit'], { queryParams: { name: 'Village', currentTab: 'Reserve Unit' }});
    }
   }

  public fetchDetailsLocation1() {
      this.name = 'Mall';
      this.id = 0;
      this.contacts = contacts1;
      this.hours = hours1;
      this.tabs = tabs;
    }

   public fetchDetailsLocation2() {
     this.name = 'Village';
     this.id = 1;
     this.contacts = contacts2;
     this.hours = hours2;
     this.tabs = tabs;
   }
}
