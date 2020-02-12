import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Moment } from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-date-picker-filter',
  templateUrl: './date-picker-filter.component.html',
  styleUrls: ['./date-picker-filter.component.css']
})
export class DatePickerFilterComponent implements OnInit {

  @Output() timeValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    // TODO 將今日時間預設填入欄位中
  }

  private setTimeValue(setDate: MatDatepickerInputEvent<Moment>) {
    this.timeValueChange.emit(setDate.value.format('YYYY-MM-DD'));
  }
}
