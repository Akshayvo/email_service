import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pay-rent-agricola',
  templateUrl: './pay-rent-agricola.component.html',
  styleUrls: ['./pay-rent-agricola.component.scss']
})
export class PayRentAgricolaComponent implements OnInit {

  data: any;
  constructor(
    // private route: ActivatedRoute,
  ) {
    // this.data = this.route.snapshot.data;

  }

  ngOnInit() {
  }

}
