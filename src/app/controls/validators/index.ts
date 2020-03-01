import { IdNumberValidator, idNumberValidatorFn } from './id-number.validator';
import { MaxlengthValidator, maxLengthValidatorFn } from './maxlength.validator';
import { MinlengthValidator, minLengthValidatorFn } from './minlength.validator';
import { PhoneValidator, phoneValidatorFn } from './phone.validator';
import { RocDateValidator, rocDateValidatorFn } from './roc-date.validator';
import { TaxIdNumberValidator, taxIdNumberValidatorFn } from './tax-id-number.validator';

export { IdNumberValidator, MaxlengthValidator, MinlengthValidator, PhoneValidator, RocDateValidator, TaxIdNumberValidator };

export const FubonValidators = {
  idNumber: idNumberValidatorFn,
  maxlength: maxLengthValidatorFn,
  minlength: minLengthValidatorFn,
  phone: phoneValidatorFn,
  rocDate: rocDateValidatorFn,
  taxIdNumber: taxIdNumberValidatorFn,
};

