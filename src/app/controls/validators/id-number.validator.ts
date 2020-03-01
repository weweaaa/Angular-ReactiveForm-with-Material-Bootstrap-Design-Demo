import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function checkIdNumber(id: string) {
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

  if (id.length !== 10) { return false; }

  let i = tab.indexOf(id.charAt(0));

  if (i === -1) {
    return false;
  }

  let sum = A1[i] + A2[i] * 9;

  for (i = 1; i < 10; i++) {
    const v = parseInt(id.charAt(i), 10);

    if (isNaN(v)) { return false; }
    sum = sum + v * Mx[i];
  }

  if (sum % 10 !== 0) { return false; }

  return true;
}

export function idNumberValidatorFn(c: AbstractControl): ValidationErrors {

  if (checkIdNumber(c.value)) {
    return null;
  }

  return {
    idNumber: true
  };
}

@Directive({
  selector: '[app-idNumberValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IdNumberValidator),
      multi: true
    }
  ]
})
export class IdNumberValidator implements Validator {
  validate(c: AbstractControl) {
    return idNumberValidatorFn(c);
  }
}
