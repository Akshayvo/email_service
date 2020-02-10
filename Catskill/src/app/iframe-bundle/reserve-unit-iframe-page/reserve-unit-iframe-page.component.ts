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
      content: `Current description works fine.`
    });
    this.titleService.setTitle('Reserve A Storage Unit Near Catskill, NY | 12414 - Catskill Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
