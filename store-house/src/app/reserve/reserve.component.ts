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
      content: `Simply fill out our form and reserve your unit today! Or call (315) 779-2121 and speak with our friendly storage specialists!`
    });
    this.titleService.setTitle('Reserve Your Unit | The Storehouse');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
