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
      content: `Take a moment to review our rates, then make your reservation with our convenient online form!`
    });
    this.titleService.setTitle('Reserve Unit | Barber Road Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
