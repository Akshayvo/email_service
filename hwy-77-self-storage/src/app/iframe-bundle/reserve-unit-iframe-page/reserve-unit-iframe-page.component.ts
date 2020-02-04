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
      content: `Simply fill out our easy reservation form and one of our friendly
      self storage associates will be ready and waiting for your arrival!`
    });
    this.titleService.setTitle('Reserve Unit | HWY 77 Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
