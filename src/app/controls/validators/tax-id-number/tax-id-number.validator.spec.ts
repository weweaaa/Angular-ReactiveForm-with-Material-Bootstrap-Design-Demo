import { FormControl } from '@angular/forms';
import { taxIdNumber } from './tax-id-number.validator';

export const testTaxIdNumberList: Array<[string, { errors: any; isError: boolean }]> = [
  ['03735202', { errors: null, isError: false }],
  ['16825747', { errors: null, isError: false }],
  ['00000022', { errors: null, isError: false }],
  ['12345678', { errors: { taxIdNumber: true }, isError: true }],
  ['77777777', { errors: { taxIdNumber: true }, isError: true }],
  ['ABCDEFGH', { errors: { taxIdNumber: true }, isError: true }]
];

describe('Tax ID Number Validator', () => {
  for (const [value, expected] of testTaxIdNumberList) {
    it(`"${value}" should ${expected.isError ? 'not' : ''} be Tax ID Number`, () => {
      const control = new FormControl(value);
      expect(taxIdNumber(control)).toEqual(expected.errors);
    });
  }
});
