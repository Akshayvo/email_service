import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-pay-rent-agricola',
  templateUrl: './pay-rent-agricola.component.html',
  styleUrls: ['./pay-rent-agricola.component.scss']
})
export class PayRentAgricolaComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,

  ) {
  }

  ngOnInit() {
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[0].path;
  }

}
