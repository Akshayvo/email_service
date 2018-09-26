import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { storageTip, storageTipAccordion } from '../data/storage';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  storageTip : any;
  storageTipAccordion: any;
  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
    this.fetchStorageTip();
    this.fetchStorageTipAccordion();
  }

  public setTitle() {
    this.titleService.setTitle('Pay Rent Catskill Self Storage');
  }

  public fetchStorageTip() {
    this.storageTip = storageTip;
  }
  public fetchStorageTipAccordion () {
    this.storageTipAccordion = storageTipAccordion;
  }

}
