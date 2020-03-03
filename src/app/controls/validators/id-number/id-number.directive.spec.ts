import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgModel, FormGroup, FormControl, FormsModule, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IdNumberDirective } from './id-number.directive';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('idNumber') idNumberNgModel: NgModel;
  form = new FormGroup({
    idNumber: new FormControl('')
  });
  idNumberControl = new FormControl('');
}

describe('IdNumberDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, IdNumberDirective],
      imports: [FormsModule, ReactiveFormsModule]
    });
  }));

  function createComponent() {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }

  describe('ngModel', () => {
    let inputElm: HTMLInputElement;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input #idNumber="ngModel" type="text" ngModel idNumber />`
        }
      });
      createComponent();
    });

    beforeEach(() => {
      const input = fixture.debugElement.query(By.css('input[idNumber]'));
      inputElm = input.nativeElement;
    });

    function update(value: string) {
      inputElm.value = value;
      inputElm.dispatchEvent(new Event('input'));
      tick();
      fixture.detectChanges();
    }

    it('"A123456789" should be ID Number', fakeAsync(() => {
      update('A123456789');
      expect(host.idNumberNgModel.errors).toBeNull();
      expect(host.idNumberNgModel.hasError('idNumber')).toBeFalsy();
    }));

    it('"B118441277" should be ID Number', fakeAsync(() => {
      update('B118441277');
      expect(host.idNumberNgModel.errors).toBeNull();
      expect(host.idNumberNgModel.hasError('idNumber')).toBeFalsy();
    }));

    it('"C102787727" should be ID Number', fakeAsync(() => {
      update('C102787727');
      expect(host.idNumberNgModel.errors).toBeNull();
      expect(host.idNumberNgModel.hasError('idNumber')).toBeFalsy();
    }));

    it('"F123456789" should not be ID Number', fakeAsync(() => {
      update('F123456789');
      expect(host.idNumberNgModel.errors).toEqual({ idNumber: true });
      expect(host.idNumberNgModel.hasError('idNumber')).toBeTruthy();
    }));

    it('"Z111333555" should not be ID Number', fakeAsync(() => {
      update('Z111333555');
      expect(host.idNumberNgModel.errors).toEqual({ idNumber: true });
      expect(host.idNumberNgModel.hasError('idNumber')).toBeTruthy();
    }));

    it('"J666888000" should not be ID Number', fakeAsync(() => {
      update('J666888000');
      expect(host.idNumberNgModel.errors).toEqual({ idNumber: true });
      expect(host.idNumberNgModel.hasError('idNumber')).toBeTruthy();
    }));
  });

  describe('formControlName', () => {
    let idNumberControl: AbstractControl;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `
            <form [formGroup]="form">
              <input formControlName="idNumber" idNumber />
            </form>
          `
        }
      });
      createComponent();
    });

    beforeEach(() => {
      idNumberControl = host.form.get('idNumber');
    });

    function update(value: string) {
      idNumberControl.setValue(value);
    }

    it('"A123456789" should be ID Number', () => {
      update('A123456789');
      expect(idNumberControl.errors).toBeNull();
      expect(idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"B118441277" should be ID Number', () => {
      update('B118441277');
      expect(idNumberControl.errors).toBeNull();
      expect(idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"C102787727" should be ID Number', () => {
      update('C102787727');
      expect(idNumberControl.errors).toBeNull();
      expect(idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"F123456789" should not be ID Number', () => {
      update('F123456789');
      expect(idNumberControl.errors).toEqual({ idNumber: true });
      expect(idNumberControl.hasError('idNumber')).toBeTruthy();
    });

    it('"Z111333555" should not be ID Number', () => {
      update('Z111333555');
      expect(idNumberControl.errors).toEqual({ idNumber: true });
      expect(idNumberControl.hasError('idNumber')).toBeTruthy();
    });

    it('"J666888000" should not be ID Number', () => {
      update('J666888000');
      expect(idNumberControl.errors).toEqual({ idNumber: true });
      expect(idNumberControl.hasError('idNumber')).toBeTruthy();
    });
  });

  describe('formControl', () => {
    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input [formControl]="idNumberControl" idNumber />`
        }
      });
      createComponent();
    });

    function update(value: string) {
      host.idNumberControl.setValue(value);
    }

    it('"A123456789" should be ID Number', () => {
      update('A123456789');
      expect(host.idNumberControl.errors).toBeNull();
      expect(host.idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"B118441277" should be ID Number', () => {
      update('B118441277');
      expect(host.idNumberControl.errors).toBeNull();
      expect(host.idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"C102787727" should be ID Number', () => {
      update('C102787727');
      expect(host.idNumberControl.errors).toBeNull();
      expect(host.idNumberControl.hasError('idNumber')).toBeFalsy();
    });

    it('"F123456789" should not be ID Number', () => {
      update('F123456789');
      expect(host.idNumberControl.errors).toEqual({ idNumber: true });
      expect(host.idNumberControl.hasError('idNumber')).toBeTruthy();
    });

    it('"Z111333555" should not be ID Number', () => {
      update('Z111333555');
      expect(host.idNumberControl.errors).toEqual({ idNumber: true });
      expect(host.idNumberControl.hasError('idNumber')).toBeTruthy();
    });

    it('"J666888000" should not be ID Number', () => {
      update('J666888000');
      expect(host.idNumberControl.errors).toEqual({ idNumber: true });
      expect(host.idNumberControl.hasError('idNumber')).toBeTruthy();
    });
  });
});
