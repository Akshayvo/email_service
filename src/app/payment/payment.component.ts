import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { storageTip } from '../data/storage';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  storageTip : any;
  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.fetchStorageTip();
  }

  public setTitle() {
    this.titleService.setTitle('Pay Rent Catskill Self Storage');
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }

}
