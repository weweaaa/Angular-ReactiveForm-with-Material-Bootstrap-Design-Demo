import { FormControl } from '@angular/forms';
import { minlength } from './minlength.validator';

describe('maxlength Validator', () => {

  it('["A", "B", "C"] Array should be 3 Minlength', () => {
    const control = new FormControl(['A', 'B', 'C']);
    expect(minlength(3)(control)).toBeNull();
  });

  it('["A"] Array should not be 2 Minlength', () => {
    const control = new FormControl('["A"]');
    expect(minlength(3)(control)).toEqual({ minlength: true });
  });
});
