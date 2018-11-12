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
  @Input() onTabClicked: any;
  placeName: string;
  selectedTab: any;
  activeTab: string;
  @Input() currentActiveTab: any;
  @ViewChild('tabContent', { read: ElementRef }) public tabContent: ElementRef<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.fetchTabs();
    this.fetchPlace();
    console.log(this.activeTab);
    // console.log(this.tabData);
    }

  public fetchPlace() {
    this.activeTab = this.currentActiveTab;
    this.placeName = this.name;
  }

  public fetchTabs() {
    if (this.tabs) {
      this.tabData = this.tabs;
    }
    // this.selectedTab = this.tabData[0].path;
  }

  public onTabClick(event: any) {
    console.log('Event: ', event);
    if(this.onTabClicked) {
      this.onTabClicked(event);
    }
  }
}


