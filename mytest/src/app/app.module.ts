import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ItemsComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
