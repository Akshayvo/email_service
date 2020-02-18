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
      content: `Ready to reserve an affordable, high quality self storage unit at
      rifle Self Storage? Click here to complete your reservation online!`
    });
    this.titleService.setTitle('Reserve Your Unit');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
