import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterElement } from 'src/app/Domain/FilterElement';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-radio-button-filter',
  templateUrl: './radio-button-filter.component.html',
  styleUrls: ['./radio-button-filter.component.css']
})
export class RadioButtonFilterComponent implements OnInit {

  defaultSelect: string;

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
      this.defaultSelect = this.filterElement.value === '' ? this.getKey(this.filterElement.filterInit[0])[0] : this.filterElement.value;
    } else {
      console.error(`RadioButtonFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  constructor() { }

  /** 抓取物件 properties Key 值 */
  getKey(keyValue: any) {
    return Object.keys(keyValue);
  }

  /** 抓取物件 value 值 */
  getValue(keyValue: any) {
    return Object.values(keyValue);
  }

  ngOnInit(): void {
    // TODO 處理預設無法選取第一個的問題
  }

  changeChecked(event: MatRadioChange) {
    this.filterElement.value = String(event.value);
    this.ValueChange.emit(this.filterElement);
  }

}
