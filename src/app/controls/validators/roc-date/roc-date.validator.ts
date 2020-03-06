import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

/**
 * 國曆日期 格式驗證 [範例格式 1090101]
 */
export const rocDate: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  if (!rocDateValidatorFn(control)) {
    return null;
  }

  return {
    rocDate: true
  };
};


export const rocDateRegex = /^(\d{3})([0]{1}\d{1}|[1]{1}[0-2]{1})([0-2]{1}\d{1}|[3]{1}[0-1]{1})$/;

export function rocDateValidatorFn(c: AbstractControl): ValidationErrors {

  if (rocDateRegex.test(c.value)) {
    const [, year, month, date] = rocDateRegex.exec(c.value);
    const rDate = new Date(1911 + +year, +month - 1, +date);

    if (+month - 1 === rDate.getMonth() && +date === rDate.getDate()) {
      return null;
    }
  }

  return {
    rocDate: true
  };
}

/** 取得今天日期 */
function getNowDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}
