import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-reserve-unit',
  templateUrl: './reserve-unit.component.html',
  styleUrls: ['./reserve-unit.component.scss']
})
export class ReserveUnitComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window: Window,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Simply fill out our easy reservation form and one of our friendly self storage
      associates will be ready and waiting for your arrival!`
    });
    this.titleService.setTitle('Reserve Your Unit | Downtown ');
  }

  public navigate(location: any) {
    this.router.navigate([location]);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
