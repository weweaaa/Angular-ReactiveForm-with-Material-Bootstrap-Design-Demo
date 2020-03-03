import { FormControl } from '@angular/forms';
import { phone } from './phone.validator';

describe('Phone Validator', () => {

  it('02-27885488 should be Phone Number', () => {
    const control = new FormControl('02-27885488');
    expect(phone(control)).toBeNull();
  });

  it('3345678 should not be Phone Number', () => {
    const control = new FormControl('3345678');
    expect(phone(control)).toEqual({ phone: true });
  });
});
