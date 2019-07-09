import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './ons-navi-sample/first-page.component';
import { SecondPageComponent } from './ons-navi-sample/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
  ],
  entryComponents: [
    FirstPageComponent,
    SecondPageComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
