import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PhoneDirective } from './phone.directive';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('phone') phoneNgModel: NgModel;
  form = new FormGroup({
    phone: new FormControl('')
  });
  phoneControl = new FormControl('');
}

describe('PhoneDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, PhoneDirective],
      imports: [FormsModule, ReactiveFormsModule]
    });
  }));

  function createComponent() {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }

  describe('ngModel', () => {
    let selectElm: HTMLSelectElement;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input #phone="ngModel" type="text" ngModel phone />`
        }
      });
      createComponent();
    });

    beforeEach(() => {
      const select = fixture.debugElement.query(By.css('input[phone]'));
      selectElm = select.nativeElement;
    });

    function update(value: string) {
      selectElm.value = value;
      selectElm.dispatchEvent(new Event('input'));
      tick();
      fixture.detectChanges();
    }

    it('0988123456 should be Phone Number', fakeAsync(() => {
      update('0988123456');
      expect(host.phoneNgModel.errors).toBeNull();
      expect(host.phoneNgModel.hasError('phone')).toBeFalsy();
    }));

    it('33478 should not be Phone Number', fakeAsync(() => {
      update('33478');
      expect(host.phoneNgModel.errors).toEqual({ phone: true });
      expect(host.phoneNgModel.hasError('phone')).toBeTruthy();
    }));
  });

  describe('formControlName', () => {
    let phoneControl: AbstractControl;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `
            <form [formGroup]="form">
              <input formControlName="phone" phone />
            </form>
          `
        }
      });
      createComponent();
    });

    beforeEach(() => {
      phoneControl = host.form.get('phone');
    });

    function update(value: string) {
      phoneControl.setValue(value);
    }

    it('0988123456 should be Phone Number', () => {
      update('0988123456');
      expect(phoneControl.errors).toBeNull();
      expect(phoneControl.hasError('phone')).toBeFalsy();
    });

    it('33478 should not be Phone Number', () => {
      update('33478');
      expect(phoneControl.errors).toEqual({ phone: true });
      expect(phoneControl.hasError('phone')).toBeTruthy();
    });
  });

  describe('formControl', () => {
    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input [formControl]="phoneControl" phone />`
        }
      });
      createComponent();
    });

    function update(value: string) {
      host.phoneControl.setValue(value);
    }

    it('0988123456 should be Phone Number', () => {
      update('0988123456');
      expect(host.phoneControl.errors).toBeNull();
      expect(host.phoneControl.hasError('phone')).toBeFalsy();
    });

    it('33478 should not be Phone Number', () => {
      update('33478');
      expect(host.phoneControl.errors).toEqual({ phone: true });
      expect(host.phoneControl.hasError('phone')).toBeTruthy();
    });
  });
});
