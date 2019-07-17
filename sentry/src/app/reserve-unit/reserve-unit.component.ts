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
      content: `Reserve your unit today by selecting a unit and filling out our handy form! One of our friendly managers will be in touch shortly!`
    });
    this.titleService.setTitle('Reserve | Sentry Stor-ALL');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
