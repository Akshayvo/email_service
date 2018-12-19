import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tabs } from '../data/location';

@Component({
  selector: 'app-storage-unit',
  templateUrl: './storage-unit.component.html',
  styleUrls: ['./storage-unit.component.scss']
})
export class StorageUnitComponent implements OnInit {
  name: any;
  tabs: any;
  currentActiveTab: any = 'Storage Units';
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    this.fetchTabs();
  }
  public fetchTabs() {
    this.tabs = tabs;
  }
}
