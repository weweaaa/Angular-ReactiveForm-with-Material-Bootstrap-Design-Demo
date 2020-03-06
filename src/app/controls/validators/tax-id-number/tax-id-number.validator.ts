import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util';

/**
 * 統一編號 格式驗證
 */
export const taxIdNumber: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  if (validTaxIdNumber(control.value)) {
    return null;
  }

  return {
    taxIdNumber: true
  };
};

export function validTaxIdNumber(taxId: string): boolean {
  const invalidList = '00000000,11111111';

  if (/^\d{8}$/.test(taxId) === false || invalidList.indexOf(taxId) !== -1) {
    return false;
  }

  const validateOperator = [1, 2, 1, 2, 1, 2, 4, 1];
  const calculate = (product: number) => {
    // 個位數 + 十位數
    const ones = product % 10;
    const tens = (product - ones) / 10;
    return ones + tens;
  };

  let sum = 0;

  for (let i = 0; i < validateOperator.length; i++) {
    sum += calculate(+taxId[i] * validateOperator[i]);
  }

  return sum % 10 === 0 || (taxId[6] === '7' && (sum + 1) % 10 === 0);
}
