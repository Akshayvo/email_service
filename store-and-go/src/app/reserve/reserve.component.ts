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
      content: `Use this short form to make a reservation with us today. One of our management
      team will be reaching out shortly to confirm your reservation!.`
    });
    this.titleService.setTitle('Reserve Unit | Store & Go Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
