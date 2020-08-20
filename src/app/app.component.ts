import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 6, item_text: 'Mumbai' },
      { item_id: 7, item_text: 'Warshaw' },
      { item_id: 8, item_text: 'London' },
      { item_id: 9, item_text: 'N.Y' },
      { item_id: 10, item_text: 'Krakow' },
      { item_id: 11, item_text: 'Bibice' },
      { item_id: 12, item_text: 'Wegrzce' },
      { item_id: 13, item_text: 'Chrzanow' },
      { item_id: 14, item_text: 'Gdansk' },
      { item_id: 15, item_text: 'Gdynia' },
      { item_id: 16, item_text: 'Sopot' },
      { item_id: 17, item_text: 'Mordor' },
      { item_id: 18, item_text: 'Hrubieszow' },
      { item_id: 19, item_text: 'Bush' },
      { item_id: 20, item_text: 'Bin' }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
