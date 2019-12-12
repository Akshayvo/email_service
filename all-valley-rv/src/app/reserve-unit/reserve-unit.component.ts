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
      content: `Simply fill out our easy reservation form and one of our friendly storage
                associates will reach out and confirm your request!`
    });
    this.titleService.setTitle('Reserve Now | All Valley RV Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
