import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

export function checkTaxIdNumber(taxId: string) {
  const invalidList = '00000000,11111111';

  if (/^\d{8}$/.test(taxId) === false || invalidList.indexOf(taxId) !== -1) {
    return false;
  }

  const validateOperator = [1, 2, 1, 2, 1, 2, 4, 1];
  const calculate = (product: number) => { // 個位數 + 十位數
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

export function taxIdNumberValidatorFn(c: AbstractControl): ValidationErrors {

  if (checkTaxIdNumber(c.value)) {
    return null;
  }

  return {
    idNumber: true
  };
}

@Directive({
  selector: '[app-taxIdNumberValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TaxIdNumberValidator),
      multi: true
    }
  ]
})
export class TaxIdNumberValidator implements Validator {
  validate(c: AbstractControl) {
    return taxIdNumberValidatorFn(c);
  }
}
