import { Directive, forwardRef, Input, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { minLengthValidatorFn } from './minlength.validator';

const MIN_LENGTH_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinlengthDirective),
  multi: true
};

@Directive({
  selector: '[minlength][ngModel],[minlength][formControlName],[minlength][formControl]',
  providers: [MIN_LENGTH_VALIDATOR]
})
export class MinlengthDirective implements Validator {

  @Input() minlength: number;

  validate(c: AbstractControl) {
    return minLengthValidatorFn(this.minlength)(c);
  }
}
