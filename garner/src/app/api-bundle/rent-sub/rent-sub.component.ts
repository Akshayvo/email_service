import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {

  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
  ) {
    // this.dataSharingService.paymentTab = 'rent-sub';
    localStorage.setItem('paymentTab', 'rent-sub');
   }

  ngOnInit() {
  }
}
