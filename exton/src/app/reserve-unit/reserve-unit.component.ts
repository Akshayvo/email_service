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
      content: `Make your reservation here with our online reservation form, or call our office today and speak with one of our friendly managers!`
    });
    this.titleService.setTitle('Reservations | Exton Store-N-More');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
