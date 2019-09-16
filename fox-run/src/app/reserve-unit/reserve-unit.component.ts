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
      content: `You can fill out our easy online form, pay your rent and deposit, then sign your lease in a 100% online move in, right here!`
    });
    this.titleService.setTitle('Rent A Unit | Fox Run Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
