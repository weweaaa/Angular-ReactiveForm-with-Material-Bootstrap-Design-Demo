import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-date-picker-filter',
  templateUrl: './date-picker-filter.component.html',
  styleUrls: ['./date-picker-filter.component.css']
})
export class DatePickerFilterComponent implements OnInit {

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
    } else {
      console.error(`DatePickerFilterComponent FilterElement undefined`);
    }
  }
  @Output() ValueChange = new EventEmitter<FilterElement>();

  constructor() { }

  ngOnInit(): void {
    if (this.filterElement === undefined || this.filterElement.value === undefined || this.filterElement.value === '') {
      this.filterElement.value = this.getNowDate();
    }
  }

  /** 使用者設定時間查詢條件 */
  setTimeValue(setDate: MatDatepickerInputEvent<Moment>) {
    this.filterElement.value = setDate.value.format('YYYY-MM-DD');
    this.ValueChange.emit(this.filterElement);
  }

  /** 取得今天日期 */
  getNowDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
}
