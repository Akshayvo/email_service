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
      content: `Quickly reserve the perfect storage unit online at 390 Self Storage in Rochester NY. We offer secure and affordable units. Also, serving Gates and Brighton NY.`
    });
    this.titleService.setTitle('Rent Storage Unit - 390 Self Storage Rochester NY, Gates, Brighton');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
