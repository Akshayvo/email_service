import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  breadcrumbActive: any = 'Reserve Unit';
  currentActive: any = 'RESERVE UNIT';

  constructor(
    private titleService: Title
  ) { }

  ngOnInit() {
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle('Reserve A Storage Unit Near Catskill, NY | 12414 - Catskill Self Storage');
  }

}
