import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Reserve your unit within seconds by filling out easy-to-use
                form right here. Reclaim that space around the home or job-site today!`
    });
    this.titleService.setTitle('Reserve Unit | High Falls Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
