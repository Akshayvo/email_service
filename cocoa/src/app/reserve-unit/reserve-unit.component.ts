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
      content: `Ready to reserve your regular, climate-controlled self storage unit, or
      outdoor parking space? Click here or call (321) 639-8576 today!`
    });
    this.titleService.setTitle('Reserve Your Unit | All Space Self Storage');
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
