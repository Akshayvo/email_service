import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  breadcrumbActive: any = 'Reserve Unit';
  currentActive: any = 'RESERVE UNIT';

  constructor() { }

  ngOnInit() {
  }

}
