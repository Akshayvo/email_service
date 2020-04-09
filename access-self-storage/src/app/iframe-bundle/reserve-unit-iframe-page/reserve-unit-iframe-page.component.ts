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
      content: `Ready to reserve your unit at Access Storage? Click here to begin storing with New Braunfels's premier self storage facility!`
    });
    this.titleService.setTitle('Reserve Unit | Access Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
