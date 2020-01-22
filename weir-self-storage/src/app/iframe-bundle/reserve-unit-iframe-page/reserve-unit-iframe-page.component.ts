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
      content: `Are you ready to start de-cluttering your life and reclaiming that
        space around the house or work-site? Make your reservation here and store with us today!`
    });
    this.titleService.setTitle('Reserve | Weir Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
