import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit, Inject  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Linden Self Storage';
  flag: boolean;
  public offsets: number[];
  x: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angulatics: Angulartics2GoogleAnalytics,
    @Inject(WINDOW) private window: Window,
  ) {
  }
  ngOnInit() {
    if ( window && window.matchMedia) {
      this.x = this.window.matchMedia('(max-width: 600px)');
    }
    // if (this.x.matches) {
    //   console.log('matches');
    // } else {
    //   console.log('not matched');
    // }
    this.flag = false;
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
  }

  public dataShow() {
    if (!this.flag) {
      this.flag = !this.flag;
      if (this.x.matches) {
      document.body.style.overflow = 'hidden';
      }
    } else {
      this.flag = !this.flag;
      if (this.x.matches) {
        document.body.style.overflow = 'auto';
        }
    }
  }
}
