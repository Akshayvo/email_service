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
      content: `Make a reservation with Sauquoit Self Storage by filling out a quick and easy form.`
    });
    this.titleService.setTitle('Reserve a Unit | Sauquoit Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
