import { Component, OnInit } from '@angular/core';
import { contact } from '../data/contact';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {

  contact: any;

  constructor() { }

  ngOnInit() {
    this.fetchContact();
  }

  public fetchContact() {
    this.contact = contact;
  }

}
