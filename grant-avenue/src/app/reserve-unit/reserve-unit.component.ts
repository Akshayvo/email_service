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
      content: `Simply fill out our easy reservation form and one of our friendly
                self storage associates will be ready and waiting for your arrival!`
    });
    this.titleService.setTitle('Reserve Unit  | Grant Avenue Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
