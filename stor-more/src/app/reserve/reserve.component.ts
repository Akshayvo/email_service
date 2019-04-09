import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  currentActive: any = 'RESERVE';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Reserve your self storage unit or vehicle parking space with Cocoa's newest self storage facility! Simply fill out our form or call (321) 500-7867!`
    });
    this.titleService.setTitle('Reserve Unit');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
