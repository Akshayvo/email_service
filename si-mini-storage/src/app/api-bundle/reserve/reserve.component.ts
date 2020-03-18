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
      content: `Are you ready to reserve your unit with SI Mini Storage? Fill out this short form and one of our friendly managers will be in touch!`
    });
    this.titleService.setTitle('Reserve a Unit | SI Mini Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
