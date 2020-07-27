import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { UaParserService } from '../services/ua-parser.service';
import { TruckRentalPageTitle, TruckRentalPageContent } from '../data/title';
import { truckRentalblurb, tuckRentalSizes } from '../data/truck-rentals';

@Component({
  selector: 'app-truck-rental',
  templateUrl: './truck-rental.component.html',
  styleUrls: ['./truck-rental.component.scss']
})
export class TruckRentalComponent implements OnInit {

  imagetype: any;
  imageBaseUrl: any;
  TruckRentalPageContent: any;
  TruckRentalPageTitle: any;
  truckRentalblurb: any;
  tuckRentalSizes: any;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private uaParserService: UaParserService,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.TruckRentalPageContent}`
    });
    this.titleService.setTitle(`${this.TruckRentalPageTitle}`);
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;

  }

  ngOnInit() {
    this.fetchData();
  }

  public fetchMetaData() {
    this.TruckRentalPageTitle = TruckRentalPageTitle;
    this.TruckRentalPageContent = TruckRentalPageContent;
  }

  public fetchData() {
    this.truckRentalblurb = truckRentalblurb;
    this.tuckRentalSizes = tuckRentalSizes;
  }
}
