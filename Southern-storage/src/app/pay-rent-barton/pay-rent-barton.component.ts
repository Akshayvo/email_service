import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-rent-barton',
  templateUrl: './pay-rent-barton.component.html',
  styleUrls: ['./pay-rent-barton.component.scss']
})
export class PayRentBartonComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataSharingService: DataSharingService,
  ) { }

  ngOnInit() {
    this.dataSharingService.apiKey = this.dataSharingService.locationAPIKey.loc1;
    this.dataSharingService.paymentNavigation = this.activatedRoute.snapshot.url[0].path;
  }

}
