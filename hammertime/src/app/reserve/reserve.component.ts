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
      content: `Reserve your self storage unit or parking space today by filling out our form, or call (815) 544-5800`
    });
    this.titleService.setTitle('Reserve Unit | Hammertime Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
