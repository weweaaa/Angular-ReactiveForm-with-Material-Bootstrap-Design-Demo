import { Component, forwardRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControl } from '../base-control';
import { ControlType } from '../../form-controls/form-controls.model';

export const DROP_DOWN_LIST_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownListComponent),
  multi: true
};

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css'],
  providers: [DROP_DOWN_LIST_VALUE_ACCESSOR]
})
export class DropDownListComponent extends BaseControl<ControlType.DropDownList> {
  constructor(injector: Injector) {
    super(injector);
  }
}
