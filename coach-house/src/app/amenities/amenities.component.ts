import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit,Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { amenitieContent,amenitieList } from '../data/amenities';


@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
  amenitieContent: any;
  amenitieList:any;

  constructor(
    @Inject(WINDOW) private window: Window,
    private titleService: Title,
    private meta: Meta
  ) { 
    this.meta.addTag({
      name: 'description',
      content: `We offer a variety of amenities that make your stay with The Coach House a relaxing and enjoyable experience!`
    });
    this.titleService.setTitle('Amenities | The Coach House');
  }

  ngOnInit() {
    this.fetchamenitieContent();
    this.fetchamenitieList();
  }

  public fetchamenitieContent(){
    this.amenitieContent = amenitieContent;
  }
  public fetchamenitieList(){
    this.amenitieList = amenitieList;
  }
}
