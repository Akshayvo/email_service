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
      content: `Reserve your unit quickly and easily with our handy online reservation form.
                Fill out your information and we'll be in touch!`
    });
    this.titleService.setTitle('Reserve Unit  | Calallen Mini Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
