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
      content: `Ready to reserve your unit at Access Storage? Click here to begin storing with New Braunfels's premier self storage facility!`
    });
    this.titleService.setTitle('Reserve Unit | Access Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
