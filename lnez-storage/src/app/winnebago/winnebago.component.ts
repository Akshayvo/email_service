import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { winnebago, winnebagoLeftColumn, winnebagoRightColumn } from '../data/camper';

@Component({
  selector: 'app-winnebago',
  templateUrl: './winnebago.component.html',
  styleUrls: ['./winnebago.component.scss']
})
export class WinnebagoComponent implements OnInit {

  winnebagoImages: any;
  winnebagoLeftColumn: any;
  winnebagoRightColumn: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Take a look at our Class C that's perfect for any trip with family or guests!
      Once you've looked at her fine features, give us a call, and find out how to rent her, today!`
   });
   this.titleService.setTitle('Winnebago Outlook 22C | Inez Storage');
  }

  ngOnInit() {
    this.fetchGallery();
  }
  public fetchGallery() {
    this.winnebagoImages = winnebago;
    this.winnebagoLeftColumn = winnebagoLeftColumn;
    this.winnebagoRightColumn = winnebagoRightColumn;
  }

}
