import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve-unit-iframe-page',
  templateUrl: './reserve-unit-iframe-page.component.html',
  styleUrls: ['./reserve-unit-iframe-page.component.scss']
})
export class ReserveUnitIframePageComponent implements OnInit {

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
