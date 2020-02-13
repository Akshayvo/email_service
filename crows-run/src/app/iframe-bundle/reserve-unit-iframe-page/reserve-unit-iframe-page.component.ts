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
    private meta: Meta,
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
