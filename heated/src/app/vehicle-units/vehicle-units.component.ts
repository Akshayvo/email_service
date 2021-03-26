import { Component, OnInit } from '@angular/core';
import { vehicleUnitsDesc, vehicleUnitsHeading, vehicleUnitList } from '../data/vehicle-unit';
import { vehicleUnitHeading } from '../data/heading';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService } from '../services/link.service';
import { CanonicalService } from '../services/canonical.service';
import { UaParserService } from '../services/ua-parser.service';


@Component({
  selector: 'app-vehicle-units',
  templateUrl: './vehicle-units.component.html',
  styleUrls: ['./vehicle-units.component.scss']
})
export class VehicleUnitsComponent implements OnInit {
  vehicleUnits: any;
  vehicleUnitsHeading: string;
  vehicleUnitHeading: string;
  vehicleUnitList: any;
  vehicleUnitPageContent: string;
  vehicleUnitPageTitle: string;
  imageBaseUrl: any;
  imagetype: any;


  constructor(
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    private canonical: CanonicalService,
    private metaService: MetaService,
    private uaParserService: UaParserService
    ) { 
    this.meta.addTag({
      name: 'description',
      content: `${this.vehicleUnitPageContent}`
    });
    this.titleService.setTitle(`${this.vehicleUnitPageTitle}`);
    this.canonical.create();
    this.imagetype = this.uaParserService.typeOfImages.toLowerCase();
    this.imageBaseUrl = this.uaParserService.baseUrl;
  }

  ngOnInit() {
    this.fetchStaticContent();
    this.fetchVehicleUnitHeading();
    this.fetchvehicleUnitList();
  }
  public navigate(location: any) {
    if ((location === '/view-rates') || (location === '/storage-tips') || (location === '/reserve-unit')) {
      this.router.navigate([`${environment.locationName}/${location}`]);
    } else {
      this.router.navigate([`${location}`]); 
    }
  }
  public fetchStaticContent() {
    this.vehicleUnits = vehicleUnitsDesc;
    this.vehicleUnitsHeading = vehicleUnitsHeading;
  }

  public fetchVehicleUnitHeading() {
    this.vehicleUnitHeading = vehicleUnitHeading;
  }
  public fetchvehicleUnitList() {
    this.vehicleUnitList = vehicleUnitList;
  }
}
