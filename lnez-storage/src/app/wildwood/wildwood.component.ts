import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { wildwood } from '../data/camper';
import { from } from 'rxjs';

@Component({
  selector: 'app-wildwood',
  templateUrl: './wildwood.component.html',
  styleUrls: ['./wildwood.component.scss']
})
export class WildwoodComponent implements OnInit {
  wildwoodImages: any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Rent our 2018 Wildwood 27REI with 2 Slide Outs! Review the details and call
                our office to learn about availability!`
   });
   this.titleService.setTitle('2018 Wildwood 27REI with 2 Slide Outs Rental | Inez Storage');
   }

  ngOnInit() {
    this.fetchGallery();
  }
 public fetchGallery() {
   this.wildwoodImages = wildwood;
 }
}
