import { FormControl } from '@angular/forms';
import { maxlength } from './maxlength.validator';

describe('maxlength Validator', () => {

  it('["A", "B", "C"] Array should be 3 MaxLength', () => {
    const control = new FormControl(['A', 'B', 'C']);
    expect(maxlength(3)(control)).toBeNull();
  });

  it('["A"] Array should not be 3 MaxLength', () => {
    const control = new FormControl(['A']);
    expect(maxlength(3)(control)).toEqual({ maxlength: true });
  });
});
