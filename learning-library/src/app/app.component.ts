import { Component, OnInit } from '@angular/core';
import { navLinks } from '../app/data/nav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learning-library';

  navLinks: any;


  ngOnInit() {
    this.fetchNavigationLinks();
  }

  public fetchNavigationLinks() {
    this.navLinks = navLinks;
  }
}
