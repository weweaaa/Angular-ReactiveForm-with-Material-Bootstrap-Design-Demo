import { BaseControl } from '../base-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Component, Injector } from '@angular/core';

export const TIME_PICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TimePickerComponent),
  multi: true
};

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
  providers: [TIME_PICKER_VALUE_ACCESSOR]
})
export class TimePickerComponent extends BaseControl {
  constructor(injector: Injector) {
    super(injector);
  }
}
