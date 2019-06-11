import { Injectable } from '@angular/core';
import {UAParser} from '../../../node_modules/@types/ua-parser-js/index/ua-parser-js';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  test_parser() {
    var ua = 'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6';
    var parser = new UAParser(ua);
    var result = parser.getResult();

    parser.getUA()
    parser.setUA("foo")

    result.ua
    result.browser.name
    result.browser.version
    parser.getBrowser().name
    parser.getBrowser().version
}
}