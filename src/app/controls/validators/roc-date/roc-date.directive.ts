import { Directive, forwardRef, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { rocDateValidatorFn } from './roc-date.validator';

const ROC_DATE_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RocDateDirective),
  multi: true
};

@Directive({
  selector: '[rocDate][ngModel],[rocDate][formControlName],[rocDate][formControl]',
  providers: [ROC_DATE_VALIDATOR]
})
export class RocDateDirective implements Validator {

  validate(c: AbstractControl) {
    return rocDateValidatorFn(c);
  }
}
