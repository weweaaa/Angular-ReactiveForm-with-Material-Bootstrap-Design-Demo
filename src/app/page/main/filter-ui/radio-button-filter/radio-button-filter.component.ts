import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterElement } from 'src/app/Domain/FilterElement';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-radio-button-filter',
  templateUrl: './radio-button-filter.component.html',
  styleUrls: ['./radio-button-filter.component.css']
})
export class RadioButtonFilterComponent implements OnInit {

  defaultSelect;

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = Object.assign({}, filter);
      this.defaultSelect = this.filterElement.value === '' ? this.getKey(this.filterElement.dataSource[0]) : this.filterElement.value;
      // this.cdf.detectChanges();
    } else {
      console.error(`RadioButtonFilterComponent FilterElement undefined`);
    }
  }

  /** 使用者輸入查詢條件 */
  @Output() ValueChange = new EventEmitter<FilterElement>();

  // ChangeDetectorRef 是可以強制再次判斷畫面自動偵測是否需要重新渲染
  // constructor(private cdf: ChangeDetectorRef) { }
  constructor() { }

  // 使用 ngOnChanges 記得要在 class 上 implements OnChanges 介面
  // 也可以使用 ngOnChanges 做法，只是為了保持與其他查詢條件一致的寫法，顯都統一在 Input set 流程實作
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.filterElement !== undefined && (changes.filterElement as unknown as FilterElement).dataSource !== undefined) {
  //     console.log(changes);
  //     this.defaultSelect = this.filterElement.value === '' ? this.getKey(this.filterElement.dataSource[0])[0] : this.filterElement.value;
  //   }
  // }

  /** 抓取物件 properties Key 值 */
  getKey(keyValue: any): string {
    if (keyValue !== undefined) {
      return Object.keys(keyValue)[0];  // *注意回傳結果，Object.keys 回傳的是陣列，所以這裡要取出第一位
    }
  }

  /** 抓取物件 value 值 */
  getValue(keyValue: any) {
    return Object.values(keyValue);
  }

  ngOnInit(): void {

  }

  changeChecked(event: MatRadioChange) {
    this.filterElement.value = String(event.value);
    this.ValueChange.emit(this.filterElement);
  }

}
