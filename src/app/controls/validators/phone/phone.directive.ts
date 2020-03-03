import { Directive, forwardRef, Provider } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { phoneValidatorFn } from './phone.validator';

const PHONE_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PhoneDirective),
  multi: true
};

@Directive({
  selector: '[phone][ngModel],[phone][formControlName],[phone][formControl]',
  providers: [PHONE_VALIDATOR]
})
export class PhoneDirective implements Validator {

  validate(c: AbstractControl) {
    return phoneValidatorFn(c);
  }
}
