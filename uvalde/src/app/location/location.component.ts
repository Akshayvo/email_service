import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { contacts260NGrove, hours260NGrove,
  contacts201Grove, hours201Grove, contacts246WSouthLane,
  hours246WSouthLane, contacts817SGetty, hours817SGetty,
  contacts430SHwy83, hours430SHwy83, contacts500EastGardenStreet,
  hours500EastGardenStreet } from '../data/contact';
import { tabs } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../services/data-sharing.service';


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

    ) {
      this.location = this.router.url;
      console.log('navigation url', this.router.url, this.location);
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
      }
    }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
        this.data = this.route.snapshot.data;
        console.log('location is', this.router.url );

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
    }
   }

  public fetchDetails260Grove() {
      this.name = '260 N Grove St';
      this.id = 0;
      this.contacts = contacts260NGrove;
      this.hours = hours260NGrove;
      this.tabs = tabs;
    }

   public fetchDetails201Grove() {
     this.name = '201 N Grove St';
     this.id = 1;
     this.contacts = contacts201Grove;
     this.hours = hours201Grove;
     this.tabs = tabs;
   }

   public fetchDetails246WSouthLane() {
     this.name = '246 West South Lane';
     this.id = 2;
     this.contacts = contacts246WSouthLane;
     this.hours = hours246WSouthLane;
     this.tabs = tabs;
   }

   public fetchDetails817SGetty() {
    this.name = '817 South Getty Street';
     this.id = 3;
     this.contacts = contacts817SGetty;
     this.hours = hours817SGetty;
     this.tabs = tabs;
   }

   public fetchDetails430SHwy83() {
    this.name = '430 South Highway 83';
     this.id = 4;
     this.contacts = contacts430SHwy83;
     this.hours = hours430SHwy83;
     this.tabs = tabs;
   }

   public fetchDetails500EastGardenStreet() {
    this.name = '500 East Garden Street';
     this.id = 5;
     this.contacts = contacts500EastGardenStreet;
     this.hours = hours500EastGardenStreet;
     this.tabs = tabs;
   }
}
