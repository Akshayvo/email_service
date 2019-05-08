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
      content: `Reserve your unit online with this simple form, or call Nancy at (480) 837-3100 and make a reservation over the phone!`
    });
    this.titleService.setTitle('Reserve Unit | Saguaro Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
