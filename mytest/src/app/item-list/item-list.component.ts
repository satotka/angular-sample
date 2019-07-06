import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items',
  templateUrl: './item-list.component.html'
})
export class ItemsComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
