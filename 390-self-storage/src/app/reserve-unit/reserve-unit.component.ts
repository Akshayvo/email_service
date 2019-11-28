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
      content: `Reserve your unit quickly and easily with our handy online reservation form. Fill out your information and we'll be in touch!`
    });
    this.titleService.setTitle('Reserve Now | 390 Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
