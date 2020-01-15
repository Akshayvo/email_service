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
      content: `Are you ready to reserve your unit or workshop? Start here with our easy reservation form, and one of our friendly managers will reach out shortly to confirm!`
    });
    this.titleService.setTitle('Reservations | State Storage Workshops');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
