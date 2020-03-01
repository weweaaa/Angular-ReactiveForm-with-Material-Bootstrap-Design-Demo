import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../base-control';
import { ControlType } from '../../form-controls/form-controls.model';

export const CHECK_BOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckBoxComponent),
  multi: true
};

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers: [CHECK_BOX_VALUE_ACCESSOR]
})
export class CheckBoxComponent extends BaseControl<ControlType.CheckBox> {
  constructor(injector: Injector) {
    super(injector);
  }
}
