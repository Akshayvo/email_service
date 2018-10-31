import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabData: any;
  @Input('tabs') tabs;
  @Input('name') name;
  placeName: any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.fetchTabs();
    this.fetchPlace();
    console.log(this.placeName);
  }

  public fetchPlace() {
    this.placeName = this.name;
  }

  public fetchTabs() {
    this.tabData = this.tabs;
  }
}
