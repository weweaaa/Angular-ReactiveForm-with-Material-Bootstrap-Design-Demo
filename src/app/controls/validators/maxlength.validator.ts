import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function maxLengthValidatorFn(maxLength: number) {
  return (c: AbstractControl): ValidationErrors => {

    if (Array.isArray(c.value) && c.value.length >= maxLength) {
      return null;
    }

    return {
      maxlength: true
    };
  };
}

@Directive({
  selector: '[app-maxlengthValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxlengthValidator),
      multi: true
    }
  ]
})
export class MaxlengthValidator implements Validator {
  @Input() maxlength: number;

  validate(c: AbstractControl) {
    return maxLengthValidatorFn(this.maxlength)(c);
  }
}
