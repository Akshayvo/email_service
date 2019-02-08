import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Reserve your self storage unit today with our easy reservation form!`
    });
    this.titleService.setTitle(`Reserve Your Unit | zeke's Self Storage`);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
