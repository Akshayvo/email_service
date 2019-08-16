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
      content: `Make your reservation here with our handy form! One of our managers will be in touch shortly to confirm!`
    });
    this.titleService.setTitle('Reserve Unit | Central Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
