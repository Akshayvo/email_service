import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
    this.meta.addTag({
      name: 'description',
      content: `Ready to reserve an affordable, high quality self storage unit at
      Cuba Self Storage? Click here to complete your reservation online!`
    });
    this.titleService.setTitle('Reserve Your Unit');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
