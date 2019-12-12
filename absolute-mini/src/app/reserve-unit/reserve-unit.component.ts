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
      content: `Ready to reserve your regular, climate-controlled self storage unit,
                or outdoor parking space? Click here or call (336) 307-3000 today!`
    });
    this.titleService.setTitle('Reserve Now | Absolute Mini Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
