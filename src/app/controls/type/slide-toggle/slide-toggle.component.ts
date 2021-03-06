import { BaseControl } from '../base-control';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Component, Injector } from '@angular/core';
import { ControlType } from '../../form-controls/form-controls.model';

export const SLIDE_CHECKED_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SlideToggleComponent),
  multi: true
};

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css'],
  providers: [SLIDE_CHECKED_VALUE_ACCESSOR]
})
export class SlideToggleComponent extends BaseControl<ControlType.SlideToggle> {
  constructor(injector: Injector) {
    super(injector);
  }
}
