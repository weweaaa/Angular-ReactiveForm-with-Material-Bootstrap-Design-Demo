import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

export const maxlength = (length: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!maxLengthValidatorFn(length)(control)) {
      return null;
    }

    return {
      maxlength: true
    };
  }
};


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
