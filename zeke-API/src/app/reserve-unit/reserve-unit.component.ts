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
      content: `Reserve your self storage unit today with our easy reservation form!`
    });
    this.titleService.setTitle(`Reserve Your Unit | Zeke's Self Storage`);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
