import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabData: any;
  @Input() tabs: any;
  @Input() name: any;
  @Input() currentActiveTab: any;
  placeName: string;
  selectedTab: any;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router, ) { }

    ngOnInit() {
      this.fetchTabs();
      this.fetchPlace();
      
      }

    public fetchPlace() {
      this.placeName = this.name;
    }

    public fetchTabs() {
      this.tabData = this.tabs;
      this.sub = this.route.queryParams.subscribe(params => {
             this.name = params['name'],
             this.currentActiveTab = params['currentTab'];
             this.selectedTab = this.currentActiveTab;
           });
     }
    
}