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
      content: `Reserve your very own regular or climate-controlled unit today with our easy reservation form!`
    });
    this.titleService.setTitle('Reserve Now | SUM Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
