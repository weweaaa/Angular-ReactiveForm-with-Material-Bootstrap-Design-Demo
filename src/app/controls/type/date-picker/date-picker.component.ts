import { Component, OnInit, Input } from '@angular/core';
import { ControlItem } from '../../form-controls/form-controls.model';
import { FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { Moment } from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  @Input() customForm: FormGroup;
  @Input() controlItem: ControlItem;

  constructor() { }

  ngOnInit(): void {
    if (this.controlItem === undefined || this.controlItem.value === undefined || this.controlItem.value === '') {
      this.controlItem.value = this.getNowDate();
    }
  }

   /** 使用者設定時間查詢條件 */
   setTimeValue(setDate: MatDatepickerInputEvent<Moment>) {
    this.controlItem.value = setDate.value.format('YYYY-MM-DD');
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
