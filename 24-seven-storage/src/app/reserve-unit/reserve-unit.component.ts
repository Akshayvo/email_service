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
      content: `Take a moment to fill out our easy reservation form, and one of our friendly managers will be in touch!`
    });
    this.titleService.setTitle('Reserve Unit | Crows Run Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
