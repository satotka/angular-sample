import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  tabList: any;
  items: any;
  selectedTab: any;

  constructor() { }

  ngOnInit() {
    this.items = [
      { name: 'item1', complete: false, type: "装置" },
      { name: 'item2', complete: false, type: "エリア" }
    ];

    this.tabList = [
      { title: 'tab1', filters: ['エリア', '装置'] },
      { title: 'tab2', filters: ['エリア'] },
      { title: 'tab3', filters: ['装置'] },
    ];
    this.selectedTab = this.tabList[0];
  }

  tab_click(tab) {
    this.selectedTab = tab;
  }

  NewTab() {
    this.tabList.push(
      { title: 'new', selected: false, filters: [] }
    );
  }

  IsSelected(tab) {
    return this.selectedTab === tab;
  }

  filterdItems() {
    return this.items.filter(i => i.type === 'エリア');
  }

  tab_delete(tab) {
    if (this.tabList.length === 1) {
      return;
    }
    this.tabList = this.tabList.filter((t)=>{return tab !== t;});
    if (this.selectedTab === tab) {
      this.selectedTab = this.tabList[0];
    }
  }
}
