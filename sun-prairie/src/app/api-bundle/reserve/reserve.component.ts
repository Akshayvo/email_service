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
      content: `Are you ready to start de-cluttering your life and reclaiming that space around
      the house or work-site? Make your reservation here and store with us today!`
    });
    this.titleService.setTitle('Reserve a Unit | Sun Prairie Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
