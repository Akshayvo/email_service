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
      content: `Use this form to reserve your unit today! One of our friendly
      managers will reach out shortly to assist you!`
    });
    this.titleService.setTitle('Reserve Unit | Lois Stor-All');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
