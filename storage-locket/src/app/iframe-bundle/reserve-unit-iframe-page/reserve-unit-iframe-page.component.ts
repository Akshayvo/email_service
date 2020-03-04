import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { reservePageTitle, reservePageContent } from '../../data/title';
@Component({
  selector: 'app-reserve-unit-iframe-page',
  templateUrl: './reserve-unit-iframe-page.component.html',
  styleUrls: ['./reserve-unit-iframe-page.component.scss']
})
export class ReserveUnitIframePageComponent implements OnInit {
  reservePageContent: string;
  reservePageTitle: string;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.fetchMetaData();
    this.meta.addTag({
      name: 'description',
      content: `${this.reservePageContent}`
    });
    this.titleService.setTitle(`${this.reservePageTitle}`);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  public fetchMetaData() {
    this.reservePageTitle = reservePageTitle;
    this.reservePageContent = reservePageContent;
  }
}
