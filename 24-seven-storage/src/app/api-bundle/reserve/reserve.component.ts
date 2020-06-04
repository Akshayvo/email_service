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
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Ready to reserve your unit at 24 Seven Storage ? Click here to begin storing with Virginia Beach's premier self storage facility!`
    });
    this.titleService.setTitle('Reserve Your Unit | 24 Seven Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
