import { NgModule } from '@angular/core';
import { idNumber, IdNumberDirective } from './id-number';
import { maxlength, MaxlengthDirective } from './maxlength';
import { minlength, MinlengthDirective } from './minlength';
import { phone, PhoneDirective } from './phone';
import { rocDate, RocDateDirective } from './roc-date';
import { taxIdNumber, TaxIdNumberDirective } from './tax-id-number';

export const FubonValidators = {
  idNumber,
  maxlength,
  minlength,
  phone,
  rocDate,
  taxIdNumber,

};

const DIRECTIVES = [
  IdNumberDirective,
  MaxlengthDirective,
  MinlengthDirective,
  PhoneDirective,
  RocDateDirective,
  TaxIdNumberDirective];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES]
})
export class FubonValidationModule { }
