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
    this.tabData = this.tabs;
    // this.selectedTab = this.tabData[0].path;
  }
//   public listClick(_event: any, newValue: any) {
//     this.selectedTab = newValue;
// }
// public scrollRight(): void {
//   this.tabContent.nativeElement.scrollTo({
//     left: (this.tabContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
// }

// public scrollLeft(): void {
//   this.tabContent.nativeElement.scrollTo({
//     right: (this.tabContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
// }
}


