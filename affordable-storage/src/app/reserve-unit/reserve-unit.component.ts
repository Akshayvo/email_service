import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  currentActive: any = 'RESERVE';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Are you ready to reserve your storage unit or parking space at Affordable Storage
      Solutions? Fill out our handy form or call (479) 253-6117 today!`
    });
    this.titleService.setTitle('Reserve Unit | Affordable Storage Solutions');
    this.canonical.create();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}