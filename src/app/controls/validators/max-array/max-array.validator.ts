import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

export const maxArray = (length: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    if (!maxArrayValidatorFn(length)(control)) {
      return null;
    }

    return {
      maxArray: true
    };
  };
};


export function maxArrayValidatorFn(length: number) {
  return (c: AbstractControl): ValidationErrors => {

    if (Array.isArray(c.value) && c.value.length <= length) {
      return null;
    }

    return {
      maxArray: true
    };
  };
}
