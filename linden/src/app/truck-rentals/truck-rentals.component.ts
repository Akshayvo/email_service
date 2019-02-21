import { Component, OnInit } from '@angular/core';
import { truckRentalblurb, tuckRentalSizes } from '../data/truck-rentals';

@Component({
  selector: 'app-truck-rentals',
  templateUrl: './truck-rentals.component.html',
  styleUrls: ['./truck-rentals.component.scss']
})
export class TruckRentalsComponent implements OnInit {
  truckRentalblurb: any;
  tuckRentalSizes: any;

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData() {
    this.truckRentalblurb = truckRentalblurb;
    this.tuckRentalSizes = tuckRentalSizes;
  }

}
