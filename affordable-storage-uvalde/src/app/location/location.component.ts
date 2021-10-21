import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { contacts260NGrove, hours260NGrove,
  contacts201Grove, hours201Grove, contacts246WSouthLane,
  hours246WSouthLane, contacts817SGetty, hours817SGetty,
  contacts430SHwy83, hours430SHwy83, contacts500EastGardenStreet,
  hours500EastGardenStreet,
  contacts2633EastMainStreet,
  hours2633EastMainStreet,contacts244NGrove,hours244NGrove } from '../data/contact';
import { tabs } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';
import { UaParserService } from '../services/ua-parser.service';


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
  imageBaseUrl: any;
  imagetype: any;
  photo: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta,
    private route: ActivatedRoute,
    private uaParserService: UaParserService,
    private dataSharingService: DataSharingService,

    ) {
      this.location = this.router.url;
      if (this.router.url.includes('/location/260-n-grove')) {
          this.meta.addTag({
            name: 'description',
            content: `Check out the affordable storage unit rates and availability at our
            260 North Grove location! Reserve online or call today!`
          });
          this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
      } else if (this.router.url.includes('/location/201-n-grove')) {
          this.meta.addTag({
            name: 'description',
            content: `Take a look at our storage unit rates and availability at the 201 North Grove
            location! Reserve online or call our team today!`
          });
          this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
      } else if (this.router.url.includes('/location/246-w-south-lane')) {
          this.meta.addTag({
            name: 'description',
            content: `Check out our unit rates and availability at 246
            West South Lane location! Reserve online or call today!`
          });
          this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
      } else if (this.router.url.includes('/location/817-s-getty')) {
        this.meta.addTag({
          name: 'description',
          content: `Check out our unit rates and availability at our 817 South
          Getty Street location! Reserve online or call today!`
        });
        this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
      } else if (this.router.url.includes('/location/430-s-hwy-83')) {
        this.meta.addTag({
          name: 'description',
          content: `Check out our unit rates and availability at our 430 South Highway 83
          location! Reserve online or call today!`
        });
        this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc5;
        } else if (this.router.url.includes('/location/500-east-garden-street')) {
          this.meta.addTag({
            name: 'description',
            content: `Check out our affordable rates and availability at our 500 East Garden
            Street location! Reserve online or call today!`
          });
          this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
          this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc6;
      }  else if (this.router.url.includes('/location/2633-east-main-street')) {
        this.meta.addTag({
          name: 'description',
          content: `Check out our affordable rates and availability at our 2633 East Main
          Street location! Reserve online or call today!`
        });
        this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc7;
    } else if (this.router.url.includes('/location/244-n-grove')) {
      this.meta.addTag({
        name: 'description',
        content: `Check out our competitive storage unit prices and availability at our
        244 North Grove location! Reserve or call today!`
      });
      this.titleService.setTitle('Self Storage Units in Uvalde, TX | Affordable Self Storage');
      this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc8;
  }
      this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
        this.data = this.route.snapshot.data;

  }

  public isSomePage() {
    if (this.router.url.includes('/location/260-n-grove')) {
        this.fetchDetails260Grove();
    } else if (this.router.url.includes('/location/201-n-grove')) {
      this.fetchDetails201Grove();
    } else if (this.router.url.includes('/location/246-w-south-lane')) {
      this.fetchDetails246WSouthLane();
    } else if (this.router.url.includes('/location/817-s-getty')) {
      this.fetchDetails817SGetty();
    } else if (this.router.url.includes('/location/430-s-hwy-83')) {
      this.fetchDetails430SHwy83();
    } else if (this.router.url.includes('/location/500-east-garden-street')) {
      this.fetchDetails500EastGardenStreet();
    } else if (this.router.url.includes('/location/2633-east-main-street')) {
      this.fetchDetails2633EastMainStreet();
    } else if (this.router.url.includes('/location/244-n-grove')) {
      this.fetchDetails244NGrove();
    }
 }

  public navigateToContact() {
   this.router.navigate(['contact-us']);
  }

  public navigateToPayment() {
    if ( this.id === 0 ) {
      this.router.navigate(['/pay-rent/260-n-grove']);
    } else if ( this.id === 1 ) {
      this.router.navigate(['/pay-rent/201-n-grove']);
    } else if ( this.id === 2) {
      this.router.navigate(['/pay-rent/246-w-south-lane']);
    } else if ( this.id === 3) {
      this.router.navigate(['/pay-rent/817-s-getty']);
    } else if ( this.id === 4) {
      this.router.navigate(['/pay-rent/430-s-hwy-83']);
    } else if ( this.id === 5) {
      this.router.navigate(['/pay-rent/500-east-garden-street']);
    } else if ( this.id === 6) {
      this.router.navigate(['/pay-rent/2633-east-main-street']);
    } else if ( this.id === 7) {
      this.router.navigate(['/pay-rent/244-n-grove']);
    }
   }

   public navigateToReserve() {
    if ( this.id === 0 ) {
      this.router.navigate(['/location/260-n-grove/reserveUnit'],
      );
    } else if ( this.id === 1 ) {
      this.router.navigate(['/location/201-n-grove/reserveUnit'],
     );
    } else if ( this.id === 2) {
      this.router.navigate(['/location/246-w-south-lane/reserveUnit'],
      );
    } else if ( this.id === 3) {
      this.router.navigate(['/location/817-s-getty/reserveUnit'],
      );
    } else if ( this.id === 4) {
      this.router.navigate(['/location/430-s-hwy-83/reserveUnit'],
      );
    } else if ( this.id === 5) {
      this.router.navigate(['/location/500-east-garden-street/reserveUnit'],
      );
    } else if ( this.id === 6) {
      this.router.navigate(['/location/2633-east-main-street/reserveUnit'],
      );
    } else if ( this.id === 7) {
      this.router.navigate(['/location/244-n-grove/reserveUnit'],
      );
    }
   }

  public fetchDetails260Grove() {
      this.name = 'AFFORDABLE STORAGE #1 - 260 N GROVE';
      this.id = 0;
      this.contacts = contacts260NGrove;
      this.hours = hours260NGrove;
      this.tabs = tabs;
      this.photo = `${this.imageBaseUrl}/affordable-storage-1.${this.imagetype}`;
    }

   public fetchDetails201Grove() {
     this.name = 'AFFORDABLE STORAGE #2 - 201 N GROVE';
     this.id = 1;
     this.contacts = contacts201Grove;
     this.hours = hours201Grove;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/affordable-storage-2.${this.imagetype}`;
   }

   public fetchDetails246WSouthLane() {
     this.name = 'AFFORDABLE STORAGE #3 - 246 W. SOUTH LANE';
     this.id = 2;
     this.contacts = contacts246WSouthLane;
     this.hours = hours246WSouthLane;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/affordable-storage-3.${this.imagetype}`;
   }

   public fetchDetails817SGetty() {
    this.name = 'AFFORDABLE STORAGE #4 - 817 S. GETTY';
     this.id = 3;
     this.contacts = contacts817SGetty;
     this.hours = hours817SGetty;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/affordable-storage-4.${this.imagetype}`;
   }

   public fetchDetails430SHwy83() {
    this.name = 'AFFORDABLE STORAGE #5 - 430 S HWY 83';
     this.id = 4;
     this.contacts = contacts430SHwy83;
     this.hours = hours430SHwy83;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/affordable-storage-5.${this.imagetype}`;
   }

   public fetchDetails500EastGardenStreet() {
    this.name = 'AFFORDABLE STORAGE #6 - 500 E. GARDEN';
     this.id = 5;
     this.contacts = contacts500EastGardenStreet;
     this.hours = hours500EastGardenStreet;
     this.tabs = tabs;
     this.photo = `${this.imageBaseUrl}/affordable-storage-6.${this.imagetype}`;
   }

   public fetchDetails2633EastMainStreet() {
    this.name = 'AFFORDABLE STORAGE #7 - 2633 E. MAIN ST';
    this.id = 6;
    this.contacts = contacts2633EastMainStreet;
    this.hours = hours2633EastMainStreet;
    this.tabs = tabs;
    // this.photo = `${this.imageBaseUrl}/affordable-storage-7.${this.imagetype}`;
   }

   public fetchDetails244NGrove() {
    this.name = 'AFFORDABLE STORAGE #8 - 244 N. GROVE';
    this.id = 7;
    this.contacts = contacts244NGrove;
    this.hours = hours244NGrove;
    this.tabs = tabs;
    // this.photo = `${this.imageBaseUrl}/affordable-storage-8.${this.imagetype}`;
   }
}
