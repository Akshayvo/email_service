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
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Take a moment to fill out our easy reservation form, and one of our friendly managers will be in touch!`
    });
    this.titleService.setTitle('Reserve Unit | Crows Run Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
