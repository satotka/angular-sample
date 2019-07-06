import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  tabList: any;
  items: Item[];
  selectedTab: any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.getItems();

    this.tabList = [
      { title: 'tab1', filters: ['エリア', '装置'] },
      { title: 'tab2', filters: ['エリア'] },
      { title: 'tab3', filters: ['装置'] },
    ];
    this.selectedTab = this.tabList[0];
  }

  getItems(): void {
    this.items =  this.itemService.getItems();
  }

  tab_click(tab) {
    this.selectedTab = tab;
  }

  NewTab() {
    this.tabList.push(
      { title: 'new', selected: false, filters: ['その他'] }
    );
  }

  IsSelected(tab) {
    return this.selectedTab === tab;
  }

  filterdItems() {
    return this.items.filter(i => this.selectedTab.filters.includes(i.type));
  }

  tab_delete(tab) {
    if (this.tabList.length === 1) {
      return;
    }
    this.tabList = this.tabList.filter(t => tab !== t);
    if (this.selectedTab === tab) {
      this.selectedTab = this.tabList[0];
    }
  }
}
