import { Directive, forwardRef, Provider } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { idNumber } from './id-number.validator';

const ID_NUMBER_VALIDATOR: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IdNumberDirective),
  multi: true
};

@Directive({
  selector: '[idNumber][ngModel],[idNumber][formControlName],[idNumber][formControl]',
  providers: [ID_NUMBER_VALIDATOR]
})
export class IdNumberDirective implements Validator {
  validate(c: AbstractControl) {
    return idNumber(c);
  }
}
