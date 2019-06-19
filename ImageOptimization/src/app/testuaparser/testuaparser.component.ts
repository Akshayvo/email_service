import { Component, OnInit,Injectable } from '@angular/core';
import { UAParser } from 'ua-parser-js';

@Component({
  selector: 'app-testuaparser',
  templateUrl: './testuaparser.component.html',
  styleUrls: ['./testuaparser.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class TestuaparserComponent implements OnInit {
  uaparser: any;
  browsername: any;
  browserversion: any;
  constructor(
  ) {
    // console.log('UAParser:', UAParser);
    // this.uaparser = new UAParser();
   }

  ngOnInit() {
    this.test_parser();
  }
  test_parser() {
    // console.log('Browser:', this.uaparser.getBrowser().name);
    // console.log('Browser:', this.uaparser.getBrowser().version);
    
    var parser = new UAParser();
    // var result = parser.getResult();

    // parser.getUA()
    // parser.setUA("foo")

    // result.ua

    // browser
    // result.browser.name
    // result.browser.version
    // this.browsername = parser.getBrowser().name;
    // this.browserversion = parser.getBrowser().version;
    // console.log(this.browsername);
    // console.log(this.browserversion);
    // return(this.browsername,this.browserversion) 
  }  
}
