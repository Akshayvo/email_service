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
      content: `Reserve your unit today with our easy self storage reservation form, or call (845) 473-2848 and speak with a manager today!`
    });
    this.titleService.setTitle('Reserve Unit | The Storage Depot');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
