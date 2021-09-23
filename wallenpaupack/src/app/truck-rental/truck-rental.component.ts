import { Component, OnInit, Inject } from '@angular/core';
import { truckPoints, truckRental } from '../data/truck-rental';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { CanonicalService } from '../services/canonical.service';
import { ogTruckRentalPage, twitterTruckRentalPage } from '../data/script';
import { truckRentalTitle, truckRentalContent } from '../data/title';

@Component({
  selector: 'app-truck-rental',
  templateUrl: './truck-rental.component.html',
  styleUrls: ['./truck-rental.component.scss']
})


export class TruckRentalComponent implements OnInit {
  truckPoints: any;
  truckRental: any;
  currentActive: any = 'Storage Tips';
  breadcrumbActive: any = 'Storage Tips';
  og: any;
  twitter: any;
  truckRentalTitle: string;
  truckRentalContent: string;

  constructor(
    @Inject(WINDOW) private window: Window,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService
    ) {
      this.canonical.create();
      this.fetchMetaData();
      this.fetchOg();
      this.fetchTwitter();
      this.og.forEach(element => {
        this.meta.addTag({
          property: element.property,
          content: element.content
        })
      });
  
      this.twitter.forEach(element => {
        this.meta.addTag({
          name: element.name,
          content: element.content
        })
      });
    this.meta.addTag({
      name: 'description',
      content: `${this.truckRentalContent}`
    });
    this.titleService.setTitle(`${this.truckRentalTitle}`);
  }

  ngOnInit() {
    this.fetchtruckPoints();
    this.fetchTruckRental();
    window.scrollTo(0, 0);
  }

  public fetchOg() {
    this.og = ogTruckRentalPage;
}

public fetchTwitter() {
    this.twitter = twitterTruckRentalPage;
}

public fetchMetaData() {
  this.truckRentalTitle = truckRentalTitle;
  this.truckRentalContent = truckRentalContent;
}


  public fetchtruckPoints() {
    this.truckPoints = truckPoints;
  }

  public fetchTruckRental() {
    this.truckRental = truckRental;
  }
}
