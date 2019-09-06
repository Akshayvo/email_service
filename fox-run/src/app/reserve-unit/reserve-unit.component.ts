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
      content: `Are you ready to make some elbow room around the home, office, or workshop? Reserve your unit online with our tenant portal, 
                and start de-cluttering today!`
    });
    this.titleService.setTitle('Reserve Unit | Fox Run Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
