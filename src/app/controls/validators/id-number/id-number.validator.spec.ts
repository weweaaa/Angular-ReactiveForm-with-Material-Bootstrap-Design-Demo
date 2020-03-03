import { FormControl } from '@angular/forms';
import { idNumber } from './id-number.validator';

describe('ID Number Validator', () => {
  it('"A123456789" should be ID Number', () => {
    const control = new FormControl('A123456789');
    expect(idNumber(control)).toBeNull();
  });

  it('"B118441277" should be ID Number', () => {
    const control = new FormControl('B118441277');
    expect(idNumber(control)).toBeNull();
  });

  it('"C102787727" should be ID Number', () => {
    const control = new FormControl('C102787727');
    expect(idNumber(control)).toBeNull();
  });

  it('"F123456789" should not be ID Number', () => {
    const control = new FormControl('F123456789');
    expect(idNumber(control)).toEqual({ idNumber: true });
  });

  it('"Z111333555" should not be ID Number', () => {
    const control = new FormControl('Z111333555');
    expect(idNumber(control)).toEqual({ idNumber: true });
  });

  it('"J666888000" should not be ID Number', () => {
    const control = new FormControl('J666888000');
    expect(idNumber(control)).toEqual({ idNumber: true });
  });
});
