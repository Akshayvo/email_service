import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { contactsRockyCreek, hoursRockyCreek,
         contactsAgricola, hoursAgricola,
         contactsBarton, hoursBarton,contactsWade, hoursWade, socialLinks } from '../data/contact';
import { tabs, tabsBarton,tabsWade } from '../data/location';
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
  id: number;
  contacts: any;
  hours: any;
  iframeAdd: any;
  head: any;
  tabs: any;
  socialLinks: any;
  data: any;
  location: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService,
    private activatedRoute: ActivatedRoute,
    ) {
      this.location = this.router.url;
      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes('/location/rocky-creek')) {
          this.meta.addTag({
            name: 'description',
            content: `24/7 access to your unit and free online bill pay service! Southern
                      Storage at Rocky Creek offers units from 5' x 10' to 10' x 15'! Call or reserve today!`
          });
          this.titleService.setTitle('Self Storage Units Near Rocky Creek | Southern Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      } else if (this.router.url.includes('/location/agricola')) {
          this.meta.addTag({
            name: 'description',
            content: `Conveniently located in Agricola, Southern Storage has regular and climate
                      controlled storage units perfect for your needs! Reserve online or call today!`
          });
          this.titleService.setTitle('Affordable Storage Units in Agricola | Southern Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      } else if (this.router.url.includes('/location/barton')) {
          this.meta.addTag({
            name: 'description',
            content: `Southern Storage now offers a fully fenced self storage facility in Lucedale,
                      MS! Free online bill pay and the same stellar customer service!`
          });
          this.titleService.setTitle('Convenient Storage Units Near Lucedale, MS | Southern Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      }
      else if (this.router.url.includes('/location/wade')) {
        this.meta.addTag({
          name: 'description',
          content: `Take a moment to review our selection of self storage units at our Wade location, then give our friendly staff a call!`
        });
        this.titleService.setTitle('Affordable Storage Units in Wade | Southern Storage');
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
    }
    }


  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
        this.data = this.route.snapshot.data;
        

  }

  public isSomePage() {
    if (this.router.url.includes('/location/rocky-creek')) {
        this.fetchDetailsRockyCreek();
    } else if (this.router.url.includes('/location/agricola')) {
      this.fetchDetailsAgricola();
    } else if(this.router.url.includes('/location/barton')) {
      this.fetchDetailsBarton();
    }
    else if(this.router.url.includes('/location/wade')) {
      this.fetchDetailsWade();
    }
 }

  public navigateToContact() {
   this.router.navigate(['contact-us']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/pay-rent/rocky-creek']);
    } else if ( this.id === 1 ) {
      this.router.navigate(['/pay-rent/agricola']);
    } else if ( this.id === 2) {
      this.router.navigate(['/pay-rent/barton']);
    }
    else if ( this.id === 2) {
      this.router.navigate(['/pay-rent/wade']);
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      this.router.navigate(['/location/rocky-creek/reserveUnit'],
      );
    } else if ( this.id === 1 ) {
      this.router.navigate(['/location/agricola/reserveUnit'],
     );
    } else if ( this.id === 2) {
      this.router.navigate(['/location/barton/reserveUnit'],
      );
    }
    else if ( this.id === 3) {
      this.router.navigate(['/location/wade/reserveUnit'],
      );
    }

   }

  public fetchDetailsRockyCreek() {
      this.name = 'Rocky Creek';
      this.id = 0;
      this.contacts = contactsRockyCreek;
      this.hours = hoursRockyCreek;
      this.tabs = tabs;
      this.socialLinks = socialLinks;
    }

   public fetchDetailsAgricola() {
     this.name = 'Agricola';
     this.id = 1;
     this.contacts = contactsAgricola;
     this.hours = hoursAgricola;
     this.tabs = tabs;
     this.socialLinks = socialLinks;
   }

   public fetchDetailsBarton() {
     this.name = 'Barton';
     this.id = 2;
     this.contacts = contactsBarton;
     this.hours = hoursBarton;
     this.tabs = tabsBarton;
     this.socialLinks = socialLinks;
   }
   public fetchDetailsWade() {
    this.name = 'Wade';
    this.id = 3;
    this.contacts = contactsWade;
    this.hours = hoursWade;
    this.tabs = tabsWade;
    this.socialLinks = socialLinks;
  }
}
