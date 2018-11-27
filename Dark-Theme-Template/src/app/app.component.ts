import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Component, OnInit , Inject} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngStarterPack';
  flag: boolean;
  x: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private angulatics: Angulartics2GoogleAnalytics,
    @Inject(WINDOW) private window: Window,

  ) {

  }
  ngOnInit() {
    this.x = this.window.matchMedia('(max-width: 600px)');
    this.flag = false;
    // console.log('Init App');
    this.angulatics.eventTrack('Dev', {category: 'App initialized'});
    // this.angulatics.pageTrack('Hello');
    const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
  }

  public dataShow() {
    if (this.flag === false) {
      this.flag = true;
      if (this.x.matches) {
      document.body.style.overflow = 'hidden';
      }
    } else {
      this.flag = false;
      if (this.x.matches) {
        document.body.style.overflow = 'auto';
        }
    }
  }
}
