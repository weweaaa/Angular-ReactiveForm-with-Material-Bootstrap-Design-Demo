import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function minLengthValidatorFn(minLength: number) {
  return (c: AbstractControl): ValidationErrors => {

    if (Array.isArray(c.value) && c.value.length >= minLength) {
      return null;
    }

    return {
      minlength: true
    };
  };
}

@Directive({
  selector: '[app-minlengthValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MinlengthValidator),
      multi: true
    }
  ]
})
export class MinlengthValidator implements Validator {
  @Input() minlength: number;

  validate(c: AbstractControl) {
    return minLengthValidatorFn(this.minlength)(c);
  }
}
