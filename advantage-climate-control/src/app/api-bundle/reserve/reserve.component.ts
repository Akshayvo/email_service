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
      content: `Ready to reserve your regular, climate-controlled self storage unit? Click here or call (256) 715-7781 today!`
    });
    this.titleService.setTitle('Pay Rent  | Advantage Climate Controlled Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
