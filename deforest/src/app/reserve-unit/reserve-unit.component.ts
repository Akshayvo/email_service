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
      content: `Are you ready to start de-cluttering your life and reclaiming that
                space around the house or worksite? Make your reservation here and store with us today!`
    });
    this.titleService.setTitle('Reserve Unit  | Deforest Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
