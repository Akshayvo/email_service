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
  selectedTab: any;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.fetchTabs();
    this.fetchPlace();
    }

  public fetchPlace() {
    this.placeName = this.name;
  }

  public fetchTabs() {
    this.tabData = this.tabs;
    this.selectedTab = this.tabData[0].path;

  }
  public listClick(event, newValue) {
    this.selectedTab = newValue; 
}

}
