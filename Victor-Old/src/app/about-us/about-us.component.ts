import { Component, OnInit } from '@angular/core';
import { aboutUsVillage } from '../data/location'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  
  aboutPara: any;

  constructor() { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData(){
    this.aboutPara = aboutUsVillage;
  }
}
