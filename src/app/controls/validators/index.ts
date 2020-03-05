import { NgModule } from '@angular/core';
import { idNumber, IdNumberDirective } from './id-number';
import { maxArray, MaxArrayDirective } from './max-array';
import { minArray, MinArrayDirective } from './min-array';
import { phone, PhoneDirective } from './phone';
import { rocDate, RocDateDirective } from './roc-date';
import { taxIdNumber, TaxIdNumberDirective } from './tax-id-number';

export const FubonValidators = {
  idNumber,
  maxArray,
  minArray,
  phone,
  rocDate,
  taxIdNumber,
};

const DIRECTIVES = [
  IdNumberDirective,
  MaxArrayDirective,
  MinArrayDirective,
  PhoneDirective,
  RocDateDirective,
  TaxIdNumberDirective];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class FubonValidationModule { }
