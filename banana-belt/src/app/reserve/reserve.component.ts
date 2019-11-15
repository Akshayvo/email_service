import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  currentActive: any = 'RESERVE';

  constructor(
    private titleService: Title,
    private meta: Meta,
    private canonical: CanonicalService,
    ) {
      this.canonical.create();
      this.meta.addTag({
        name: 'description',
        content: `Start making extra room at home today! Reserve your storage unit at Banana Belt Storage.
        Call (719) 966-2240 or use our reservation form!`
      });
      this.titleService.setTitle('Reserve Your Unit | Banana Belt Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
