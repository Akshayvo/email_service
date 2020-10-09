import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-pay-rent-rocky-creek',
  templateUrl: './pay-rent-rocky-creek.component.html',
  styleUrls: ['./pay-rent-rocky-creek.component.scss']
})
export class PayRentRockyCreekComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
  ) { }

  ngOnInit() {
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc2;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[1].path;
    localStorage.setItem('paymentNavigationUrl', this.dataSharingService.paymentNavigation) ;
  }

}
