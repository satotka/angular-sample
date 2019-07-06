import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Item[] {
    return [
      { id: 1, name: 'item1', complete: false, type: '装置' },
      { id: 2, name: 'item2', complete: false, type: 'エリア' }
    ];
  }
}
