import { FormControl } from '@angular/forms';
import { rocDate } from './roc-date.validator';

describe('RocDate Validator', () => {

  it('1090302 should be rocDate', () => {
    const control = new FormControl('1090302');
    expect(rocDate(control)).toBeNull();
  });

  it('1989/02/34 should not be rocDate', () => {
    const control = new FormControl('1989/02/34');
    expect(rocDate(control)).toEqual({ rocDate: true });
  });
});
