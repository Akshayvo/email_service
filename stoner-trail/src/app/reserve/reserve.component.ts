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
      content: `Reserve your unit in a matter of second with our easy to use
      online reservation form or call (518)762-7867`
    });
    this.titleService.setTitle('Reserve Your Unit | Stoner Trail Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
