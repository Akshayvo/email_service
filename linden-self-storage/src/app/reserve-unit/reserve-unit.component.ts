import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you ready to reserve your climate controlled or regular self storage unit at Linden Self Storage? Click here and fill out our easy form, today!`
    });
    this.titleService.setTitle('Reserve Unit | Linden Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
