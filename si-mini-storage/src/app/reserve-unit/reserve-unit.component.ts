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
      content: `Are you ready to reserve your unit with SI Mini Storage? Fill out this short form and one of our friendly managers will be in touch!`
    });
    this.titleService.setTitle('Reserve a Unit | SI Mini Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
