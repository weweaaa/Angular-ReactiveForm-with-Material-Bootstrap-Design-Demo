import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, NgModel, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TaxIdNumberDirective } from './tax-id-number.directive';
import { testTaxIdNumberList } from './tax-id-number.validator.spec';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('taxIdNumber') taxIdNumberNgModel: NgModel;
  form = new FormGroup({
    taxIdNumber: new FormControl('')
  });
  taxIdNumberControl = new FormControl('');
}

describe('TaxIdNumberDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, TaxIdNumberDirective],
      imports: [FormsModule, ReactiveFormsModule]
    });
  }));

  function createComponent() {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }

  describe('use ngModel two-way binding', () => {
    let inputElm: HTMLInputElement;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input #taxIdNumber="ngModel" type="text" ngModel taxIdNumber />`
        }
      });
      createComponent();
    });

    beforeEach(() => {
      const input = fixture.debugElement.query(By.css('input[taxIdNumber]'));
      inputElm = input.nativeElement;
    });

    function update(value: string) {
      inputElm.value = value;
      inputElm.dispatchEvent(new Event('input'));
      tick();
      fixture.detectChanges();
    }

    for (const [value, expected] of testTaxIdNumberList) {
      it(`"${value}" should ${expected.isError ? 'not' : ''} be Tax ID Number`, fakeAsync(() => {
        update(value);
        expect(host.taxIdNumberNgModel.errors).toEqual(expected.errors);
        expect(host.taxIdNumberNgModel.hasError('taxIdNumber')).toBe(expected.isError);
      }));
    }
  });

  describe('use formControlName two-way binding', () => {
    let taxIdNumberControl: AbstractControl;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `
            <form [formGroup]="form">
              <input formControlName="taxIdNumber" taxIdNumber />
            </form>
          `
        }
      });
      createComponent();
    });

    beforeEach(() => {
      taxIdNumberControl = host.form.get('taxIdNumber');
    });

    function update(value: string) {
      taxIdNumberControl.setValue(value);
    }

    for (const [value, expected] of testTaxIdNumberList) {
      it(`"${value}" should ${expected.isError ? 'not' : ''} be Tax ID Number`, () => {
        update(value);
        expect(taxIdNumberControl.errors).toEqual(expected.errors);
        expect(taxIdNumberControl.hasError('taxIdNumber')).toBe(expected.isError);
      });
    }
  });

  describe('use formControl two-way binding', () => {
    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input [formControl]="taxIdNumberControl" taxIdNumber />`
        }
      });
      createComponent();
    });

    function update(value: string) {
      host.taxIdNumberControl.setValue(value);
    }

    for (const [value, expected] of testTaxIdNumberList) {
      it(`"${value}" should ${expected.isError ? 'not' : ''} be Tax ID Number`, () => {
        update(value);
        expect(host.taxIdNumberControl.errors).toEqual(expected.errors);
        expect(host.taxIdNumberControl.hasError('taxIdNumber')).toBe(expected.isError);
      });
    }
  });
});
