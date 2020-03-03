import { AbstractControl, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';
import { isPresent } from '../util';

export const idNumber: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  if (validIdNumber(control.value)) {
    return null;
  }

  return {
    idNumber: true
  };
};

export function validIdNumber(id: string): boolean {
  const tab = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
  const A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
  const A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
  const Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

  if (id.length !== 10) {
    return false;
  }

  let i = tab.indexOf(id.charAt(0));

  if (i === -1) {
    return false;
  }

  let sum = A1[i] + A2[i] * 9;

  for (i = 1; i < 10; i++) {
    const v = parseInt(id.charAt(i), 10);

    if (isNaN(v)) {
      return false;
    }
    sum = sum + v * Mx[i];
  }

  if (sum % 10 !== 0) {
    return false;
  }

  return true;
}
