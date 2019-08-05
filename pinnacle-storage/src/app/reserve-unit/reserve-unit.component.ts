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
      content: `Use our easy online form to submit your reservation request! One of our managers will reach out shortly to confirm the reservation.`
    });
    this.titleService.setTitle('Reservations | Pinnacle Storage Solutions');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
