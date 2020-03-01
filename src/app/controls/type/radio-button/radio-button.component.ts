import { BaseControl } from '../base-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Component, Injector } from '@angular/core';

export const RADIO_BUTTON_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButtonComponent),
  multi: true
};

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [RADIO_BUTTON_VALUE_ACCESSOR]
})
export class RadioButtonComponent extends BaseControl {
  constructor(injector: Injector) {
    super(injector);
  }
}
