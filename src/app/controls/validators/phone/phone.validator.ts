import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

/**
 * 電話號碼驗證 支援格式如下
 * 家電 02-12345678
 * 手機 0936123456
 */
export const phone: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  if (!phoneValidatorFn(control)) {
    return null;
  }

  return {
    phone: true
  };
};


export const phoneRegex = /^\(?(\d{2})\)?[\s\-]?(\d{4})\-?(\d{4})$/;

export function phoneValidatorFn(c: AbstractControl): ValidationErrors {

  if (phoneRegex.test(c.value)) {
    return null;
  }

  return {
    phone: true
  };
}
