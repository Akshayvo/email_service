import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  breadcrumbActive: any = 'Pay Rent';
  locationId: any;


  constructor(
    @Inject(WINDOW) private window: Window,
    private route: ActivatedRoute,
    private titleService: Title,
    private meta: Meta,
    private data: LocationService
  ) {
    this.meta.addTag({
      name: 'description',
      content: `AllSpace Storage  offers convenient online bill pay!
                Simply follow the instructions or call your location to learn how to access your account!`
    });
    this.titleService.setTitle('Pay Your Rent Online');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.receiveMessage();
  }

  receiveMessage() {
    this.data.currentLocation.subscribe(locationId => this.locationId = locationId);
  }
}
