import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  currentActive: any = 'STORAGE TIPS';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle('Pay Rent Catskill Self Storage');
  }

}
