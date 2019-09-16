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
      content: `Reserve your unit online right here, with our easy-to-use tenant portal, or call our office today!`
    });
    this.titleService.setTitle('Reserve Unit | Sto and Go');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
