import { Component, forwardRef, Injector, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../base-control';

export const DATE_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePickerComponent),
  multi: true
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [DATE_PICKER_VALUE_ACCESSOR]
})
export class DatePickerComponent extends BaseControl {

  /** 最小時間 */
  @Input() minDate: Date;
  /** 最大時間 */
  @Input() maxDate: Date;

  constructor(injector: Injector) {
    super(injector);
  }
}
