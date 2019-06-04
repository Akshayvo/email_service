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
      content: `Reserve your unit online with our simple reservation form. If you still have questions, use our contact form and drop us a line!`
    });
    this.titleService.setTitle('Reservations | Orchard Park Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
