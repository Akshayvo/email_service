import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-sub',
  templateUrl: './rent-sub.component.html',
  styleUrls: ['./rent-sub.component.scss']
})
export class RentSubComponent implements OnInit {
  tabId: any;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.tabId = params['id'];
    });

  }

}
