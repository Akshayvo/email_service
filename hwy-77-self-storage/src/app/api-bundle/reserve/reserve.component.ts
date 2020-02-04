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
      content: `Use this form to reserve your unit today! One of our friendly
      managers will reach out shortly to assist you!`
    });
    this.titleService.setTitle('');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
