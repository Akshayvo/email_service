import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { viewRates } from '../data/view-rates';
import { MetaService } from '../services/link.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FetchDataService } from '../services/fetch-data.service';


@Component({
  selector: 'app-view-rates',
  templateUrl: './view-rates.component.html',
  styleUrls: ['./view-rates.component.scss']
})
export class ViewRatesComponent implements OnInit {

  currentActive: any = 'VIEW RATES';
  viewRates: any;
  posts: any;


  // private url = `https://simapi.syrasoft.com/10.1.0.999/api/facility/unittypes`;


  constructor(
    private titleService: Title,
    private meta: Meta,
    private metaService: MetaService,
    // private http: HttpClient,
    private fetchDataService: FetchDataService,
  ) {
    this.meta.addTag({
      name: 'description',
      content: `Our units range from closet sized 5'x5' units to 10'x20' multi-bedroom home sized units.
      We strive to provide the highest level of service at the best prices! `
    });
    this.titleService.setTitle('Affordable Self Storage Near Catskill, NY, 12414 | Catskill Self Storage');
    this.metaService.createCanonicalURL();

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.fetchViewRates();
    // this.getPosts();
    this.getData();
  }
  public fetchViewRates() {
    this.viewRates = viewRates;
  }

//   getPosts() {
//     this.posts = this.http.get(this.url);
//     console.log(this.posts);
//  }

  getData() {
    console.log('method is working');
    this.fetchDataService.getData()
    .subscribe(data => {
      console.log('service is');
    });

  }
}
