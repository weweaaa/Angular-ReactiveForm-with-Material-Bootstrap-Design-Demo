import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FilterElement } from 'src/app/Domain/FilterElement';

@Component({
  selector: 'app-time-picker-filter',
  templateUrl: './time-picker-filter.component.html',
  styleUrls: ['./time-picker-filter.component.css']
})
export class TimePickerFilterComponent implements OnInit {

  @Output() ValueChange = new EventEmitter<FilterElement>();
  @ViewChild('tpicker', { static: true }) tpicker: NgModel;

  /** 查詢條件物件 */
  filterElement: FilterElement;
  @Input('filterElement') set setLabeFilter(filter: FilterElement) {
    if (filter !== undefined) {
      this.filterElement = filter;
    } else {
      console.error(`DatePickerFilterComponent FilterElement undefined`);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  setTimeValue(timeSet: string) {
    this.filterElement.value = timeSet;
    this.ValueChange.emit(this.filterElement);
  }


}
