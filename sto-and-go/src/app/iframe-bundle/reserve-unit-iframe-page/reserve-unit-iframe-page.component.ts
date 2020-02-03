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
      content: `Reserve your unit online right here, with our easy-to-use tenant portal, or call our office today!`
    });
    this.titleService.setTitle('Reserve Unit | Sto and Go');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
