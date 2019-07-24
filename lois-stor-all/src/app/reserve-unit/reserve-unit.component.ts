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
      content: `Start de-cluttering your life today with a reservation at Sandusky Self Storage!
      Our affordable unit rates and easy rental terms make us Sandusky's #1 choice!`
    });
    this.titleService.setTitle('Reservations | Sandusky Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
