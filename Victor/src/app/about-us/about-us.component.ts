import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { aboutUsVillage, aboutUsMall } from '../data/location'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {
  name: any;
  private sub: any;
  aboutPara: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchData();
  }

  public fetchData(){
    if (this.name == 'village') {
    this.aboutPara = aboutUsVillage;
    } else if (this.name == 'mall') {
      this.aboutPara = aboutUsMall;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
