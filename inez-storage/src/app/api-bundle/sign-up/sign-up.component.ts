import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
  ) {
    localStorage.setItem('paymentTab', 'sign-up');
  }

  ngOnInit() {
  }
}