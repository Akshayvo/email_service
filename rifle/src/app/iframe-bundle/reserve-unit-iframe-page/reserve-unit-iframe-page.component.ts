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
      content: `Ready to reserve an affordable, high quality self storage unit at
      rifle Self Storage? Click here to complete your reservation online!`
    });
    this.titleService.setTitle('Reserve Your Unit');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
