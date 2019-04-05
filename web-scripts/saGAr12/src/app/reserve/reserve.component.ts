import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  breadcrumbActive: any = 'Reserve Unit';
  currentActive: any = 'RESERVE';

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Reserve your self storage unit, climate controlled storage unit or U-Haul moving truck today at Catskill Self Storage!`
    });
    this.titleService.setTitle('Reserve A Storage Unit Near Catskill, NY | 12414 - Catskill Self Storage');
  }

  ngOnInit() {
  }

}
