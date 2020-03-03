import { Directive, forwardRef, Input, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { maxLengthValidatorFn } from './maxlength.validator';

const MAX_LENGTH_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxlengthDirective),
  multi: true
};

@Directive({
  selector: '[maxlength][ngModel],[maxlength][formControlName],[maxlength][formControl]',
  providers: [MAX_LENGTH_VALIDATOR]
})
export class MaxlengthDirective implements Validator {

  @Input() maxlength: number;

  validate(c: AbstractControl) {
    return maxLengthValidatorFn(this.maxlength)(c);
  }
}
