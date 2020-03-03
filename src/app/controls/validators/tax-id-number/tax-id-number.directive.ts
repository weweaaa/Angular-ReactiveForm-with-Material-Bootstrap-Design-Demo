import { Directive, forwardRef, Provider } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { taxIdNumber } from './tax-id-number.validator';

const TAX_ID_NUMBER_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TaxIdNumberDirective),
  multi: true
};

@Directive({
  selector: '[taxIdNumber][ngModel],[taxIdNumber][formControlName],[taxIdNumber][formControl]',
  providers: [TAX_ID_NUMBER_VALIDATOR]
})
export class TaxIdNumberDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return taxIdNumber(c);
  }
}
