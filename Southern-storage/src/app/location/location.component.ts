import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { contactsRockyCreek, hoursRockyCreek,
         contactsAgricola, hoursAgricola,
         contactsBarton, hoursBarton } from '../data/contact';
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
    ) {
      if (this.router.url.includes('/location/rocky-creek')) {
          this.meta.addTag({
            name: 'description',
            content: `24/7 access to your unit and free online bill pay service! Southern
                      Storage at Rocky Creek offers units from 5' x 10' to 10' x 15'! Call or reserve today!`
          });
          this.titleService.setTitle('Self Storage Units Near Rocky Creek | Southern Storage');
      } else if (this.router.url.includes('/location/agricola')) {
          this.meta.addTag({
            name: 'description',
            content: `Conveniently located in Agricola, Southern Storage has regular and climate
                      controlled storage units perfect for your needs! Reserve online or call today!`
          });
          this.titleService.setTitle('Affordable Storage Units in Agricola | Southern Storage');
      } else {
          this.meta.addTag({
            name: 'description',
            content: `Southern Storage now offers a fully fenced self storage facility in Lucedale,
                      MS! Free online bill pay and the same stellar customer service!`
          });
          this.titleService.setTitle('Convenient Storage Units Near Lucedale, MS | Southern Storage');
      }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
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

  public navigateToContact() {
   this.router.navigate(['contact']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/payment/rocky-creek'], { queryParams: { currentTab: 'Southern Storage - Rocky Creek' }});
    } else if ( this.id === 1 ) {
      this.router.navigate(['/payment/agricola'], { queryParams: { currentTab: 'Southern Storage - Agricola' }});
    } else if ( this.id === 2) {
      this.router.navigate(['/payment/barton'], { queryParams: { currentTab: 'Southern Storage - Barton' }});
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      this.router.navigate(['/location/rocky-creek/reserveUnit'], { queryParams: { name: 'Rocky-Creek', currentTab: 'Reserve Unit' }});
    } else if ( this.id === 1 ) {
      this.router.navigate(['/location/agricola/reserveUnit'], { queryParams: { name: 'Agricola', currentTab: 'Reserve Unit' }});
    } else if ( this.id === 2) {
      this.router.navigate(['/location/barton/reserveUnit'], { queryParams: { name: 'Barton', currentTab: 'Reserve Unit' }});
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
