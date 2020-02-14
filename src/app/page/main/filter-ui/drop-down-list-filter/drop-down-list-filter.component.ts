import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-drop-down-list-filter',
  templateUrl: './drop-down-list-filter.component.html',
  styleUrls: ['./drop-down-list-filter.component.css']
})
export class DropDownListFilterComponent implements OnInit {

  // 查詢條件
  @Input() selected = '';
  rTypeSelectList = [];

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
      this.rTypeSelectList = this.filterElement.dataSource;
    } else {
      console.error(`InputMailFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  /** 抓取物件 properties Key 值 */
  getKey(keyValue: any) {
    return Object.keys(keyValue);
  }

  /** 抓取物件 value 值 */
  getValue(keyValue: any) {
    return Object.values(keyValue);
  }

  constructor() { }

  ngOnInit(): void {
  }

  /** 使用者切換下拉式選單選項 */
  onselectChangeRType(event: any) {
    // 判斷是否為使用者切換
    if (event.isUserInput) {
      this.ValueChange.emit(event.source.value);
    }
  }
}
