import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Pittsburgh Area Storage Centers manages several locations with high-quality,
                well-maintained, affordable self storage units and offers stellar customer service!`
    });
    this.titleService.setTitle('Affordable Storage Units | Pittsburgh Area Storage Centers');
  }

  ngOnInit() {
  }

}
