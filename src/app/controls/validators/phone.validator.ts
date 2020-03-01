import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export const phoneRegex = /^\(?(\d{2})\)?[\s\-]?(\d{4})\-?(\d{4})$/;

export function phoneValidatorFn(c: AbstractControl): ValidationErrors {

  if (phoneRegex.test(c.value)) {
    return null;
  }

  return {
    phone: true
  };
}

@Directive({
  selector: '[app-phoneValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneValidator),
      multi: true
    }
  ]
})
export class PhoneValidator implements Validator {
  validate(c: AbstractControl) {
    return phoneValidatorFn(c);
  }
}
