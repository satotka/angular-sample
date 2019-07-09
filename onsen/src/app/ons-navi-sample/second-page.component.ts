import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ons-page[seconde]',
  templateUrl: './second-page.component.html'
})
export class SecondPageComponent implements OnInit {

  // Dependency Injection (DI) で `ons-navigator` へのアクセス手段を取得
  constructor(private navigator: OnsNavigator) { }


  ngOnInit() {
  }

  pop() {
    this.navigator.element.popPage();
  }

}
