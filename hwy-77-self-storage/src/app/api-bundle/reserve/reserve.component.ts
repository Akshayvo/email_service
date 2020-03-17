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
      content: `Simply fill out our easy reservation form and one of our friendly
      self storage associates will be ready and waiting for your arrival!`
    });
    this.titleService.setTitle('Reserve Unit | HWY 77 Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
