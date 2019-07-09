import { Component } from '@angular/core';
import { FirstPageComponent} from './ons-navi-sample/first-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialPage = FirstPageComponent;
  title = 'onsen';
}
