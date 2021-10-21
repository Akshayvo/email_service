import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

@Input() showBorder: boolean;

  th: any;
  tds: String;
  objectKeys: any;
  @Input() tBody: any;
  @Input() tHead: any;
  constructor() { }

  ngOnInit() {
    this.th = this.tHead;
    this.tds = this.tBody;
    this.objectKeys = Object.keys(this.tds[0]);
  }
}
