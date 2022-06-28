import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.scss']
})
export class RatesTableComponent implements OnInit {

  th: any;
  tds: String;
  objectKeys: any;
  @Input() tBody;
  @Input() tHead;
  constructor() { }

  ngOnInit() {
    this.th = this.tHead;
    this.tds = this.tBody;
    this.objectKeys = Object.keys(this.tds[0]);
  }

}