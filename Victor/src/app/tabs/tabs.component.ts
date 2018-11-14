import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
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
      if ( this.currentActiveTab === undefined ) {
        this.selectedTab = this.tabData[0].name;
      }
    }

  //   public listClick(event: any, newValue: any) {
  //     this.selectedTab = newValue;
  // }

  // public onTabClick(event: any) {
  //   console.log('Event: ', event);
  //   if(this.onTabClicked) {
  //     this.onTabClicked(event);
  //   }
  // }
}


