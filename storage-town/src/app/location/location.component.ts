import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { contactsLocation1, hoursLocation1,
          contactsLocation2, hoursLocation2, hoursLocation3, contactsLocation3, contactsLocation4, hoursLocation4,
          // contactsLocation3, hoursLocation3,
          } from '../data/contact';
import { tabs, tabs1, tabs2, headingLocation3, tabs3, headingLocation4 } from '../data/location';
import { headingLocation1, headingLocation2 } from '../data/location';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { DataSharingService } from '../api-bundle/services/data-sharing.service';
import { CanonicalService } from '../services/canonical.service';
import { Location1Script, Location2Script, Location3Script, Location4Script } from '../data/script';


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
  locationName: string;
  script: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private router: Router,
    private titleService: Title,
    private dataSharingService: DataSharingService,
    private canonical: CanonicalService,
    private activatedRoute: ActivatedRoute,
    ) {
      if (this.activatedRoute.snapshot.url[1].path) {
        this.dataSharingService.facilityLocation = this.activatedRoute.snapshot.url[1].path;
      }
      if (this.router.url.includes('/location/andrews')) {
        this.canonical.create();
            this.meta.addTag({
              name: 'description',
              content: `Our Florida/Warwick location has a variety of unit sizes and all storage units
              are individually alarmed for your safety!`
            });
            this.titleService.setTitle('Storage Units in Chester, NY | StorageTown Rental Spaces');
            this.locationName = `StorageTown Rental Spaces - Chester - Brookside Ave`;
            this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
            this.dataSharingService.locationName = this.locationName;
            this.script = Location2Script;

    } else if (this.router.url.includes('/location/chester')) {
      this.canonical.create();
           this.meta.addTag({
             name: 'description',
             content: `Our Chester location offers a variety of well-lit, fully-fenced self
             storage unit sizes at affordable prices! Our pin-code accessible facility also offers RV and Boat storage!`
           });
           this.titleService.setTitle('Self Storage Units in Chester | StorageTown Rental Spaces');
           this.locationName = `StorageTown Rental Spaces - Chester - Andrews Lane `;
           this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
           this.dataSharingService.locationName = this.locationName;
           this.script = Location1Script;


      } else if (this.router.url.includes('/location/montgomery-walden')) {
        this.canonical.create();
        this.meta.addTag({
          name: 'description',
          content: `Our Montgomery location offers a wide variety of affordable self storage units in a well-lit,
          fully-fenced storage facility! Call (845) 457-3500 to learn more!`
        });
        this.titleService.setTitle('Storage Units in Montgomery, NY | StorageTown Rental Spaces');
        this.locationName = `StorageTown Rental Spaces - Montgomery/Walden`;
        this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc3;
        this.dataSharingService.locationName = this.locationName;
        this.script = Location3Script;
   } else if (this.router.url.includes('/location/middletown-wallKill')) {
    this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Our Middletown location serves Middletown, Goshen and Wallkill with easy access to affordable,
      well maintained, fully-fenced in self storage units 7 days a week!`
    });
    this.titleService.setTitle('Self Storage Units in Middletown | StorageTown Rental Spaces');
    this.locationName = `StorageTown - Middletown/WallKill Location`;
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc4;
    this.dataSharingService.locationName = this.locationName;
    this.script = Location4Script;
  }
}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isSomePage();
  }

  public isSomePage() {
    if (this.router.url.includes('/location/andrews')) {
        this.fetchDetailsLocation1();
    } else if (this.router.url.includes('/location/chester')) {
      this.fetchDetailsLocation2();
    } else if (this.router.url.includes('/location/montgomery-walden')) {
      this.fetchDetailsLocation3();
    } else if (this.router.url.includes('/location/middletown-wallKill')) {
      this.fetchDetailsLocation4();
    }
 }

 public navigateToReserve() {
  if ( this.locationId === 1 ) {
    this.router.navigate(['/location/andrews/reserve-unit'],
          );
  } else if ( this.locationId === 2 ) {
    this.router.navigate(['/location/chester/reserve-unit'],
          );
  }  else if ( this.locationId === 3 ) {
    this.router.navigate(['/location/montgomery-walden/reserve-unit'],
         );
  }  else if ( this.locationId === 4 ) {
    this.router.navigate(['/location/middletown-wallKill/reserve-unit'],
          );
  }
 }

  public fetchDetailsLocation1() {
      this.name = headingLocation1;
      this.locationId = 1;
      this.contacts = contactsLocation1;
      this.hours = hoursLocation1;
      this.tabs = tabs1;
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
    this.contacts = contactsLocation3;
    this.hours = hoursLocation3;
    this.tabs = tabs2;
  }

  public fetchDetailsLocation4() {
    this.name = headingLocation4;
    this.locationId = 4;
    this.contacts = contactsLocation4;
    this.hours = hoursLocation4;
    this.tabs = tabs3;
  }
}
