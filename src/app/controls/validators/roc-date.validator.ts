import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export const rocDateRegex = /^(\d{3})([0]{1}\d{1}|[1]{1}[0-2]{1})([0-2]{1}\d{1}|[3]{1}[0-1]{1})$/;

export function rocDateValidatorFn(c: AbstractControl): ValidationErrors {

  if (rocDateRegex.test(c.value)) {
    const [, rocYear, rocMonth, rocDate] = rocDateRegex.exec(c.value);
    const date = new Date(1911 + +rocYear, +rocMonth - 1, +rocDate);

    if (+rocMonth - 1 === date.getMonth() && +rocDate === date.getDate()) {
      return null;
    }
  }

  return {
    rocDate: true
  };
}

@Directive({
  selector: '[app-rocDateValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RocDateValidator),
      multi: true
    }
  ]
})
export class RocDateValidator implements Validator {
  validate(c: AbstractControl) {
    return rocDateValidatorFn(c);
  }
}

/** 取得今天日期 */
function getNowDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}
