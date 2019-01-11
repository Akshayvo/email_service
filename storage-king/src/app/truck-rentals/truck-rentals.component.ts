import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { truckRentals } from '../data/truck-rentals';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-truck-rentals',
  templateUrl: './truck-rentals.component.html',
  styleUrls: ['./truck-rentals.component.scss']
})
export class TruckRentalsComponent implements OnInit {
  truckRentals: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `We offer a number of truck sizes through Penske's
              truck rentals! Review the details inside and call today!`
    });
    this.titleService.setTitle('Truck Rentals in Exeter, NH | Storage King');
   }

  ngOnInit() {
    this.fetchstoragePoints();
    window.scrollTo(0, 0);

  }

  public fetchstoragePoints() {
    this.truckRentals = truckRentals;
  }

}
