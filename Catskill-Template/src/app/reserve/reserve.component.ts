import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  currentActive: any = 'RESERVE';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Current description works fine.`
    });
    this.titleService.setTitle('Reserve A Storage Unit Near Catskill, NY | 12414 - Catskill Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
