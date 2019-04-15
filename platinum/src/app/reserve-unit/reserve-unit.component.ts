import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit , Inject} from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
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
      content: `Ready to reserve your unit at Platinum Storage? Click here to begin storing
      with Summerville's newest self storage facility!`
    });
    this.titleService.setTitle('Reserve Your Unit | Platinum Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
