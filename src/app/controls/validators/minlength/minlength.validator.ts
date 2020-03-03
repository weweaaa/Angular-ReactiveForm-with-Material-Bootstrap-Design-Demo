import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

export const minlength = (length: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!minLengthValidatorFn(length)(control)) {
      return null;
    }

    return {
      minlength: true
    };
  }
};


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
