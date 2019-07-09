import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { SecondPageComponent} from './second-page.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[first]',
  templateUrl: './first-page.component.html'
})
export class FirstPageComponent implements OnInit {

  // Dependency Injection (DI) で `ons-navigator` へのアクセス手段を取得
  constructor(private navigator: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    // `ons-navigator` に SecontPageComponent を push
    this.navigator.element.pushPage(SecondPageComponent);
  }
}
