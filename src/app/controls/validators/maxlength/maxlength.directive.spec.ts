import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FubonControlsModule } from '../../controls.module';
import { MaxlengthDirective } from './maxlength.directive';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('maxlength') maxlengthNgModel: NgModel;
  form = new FormGroup({
    maxlength: new FormControl('')
  });
  maxlengthControl = new FormControl('');
}

describe('MaxlengthDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, MaxlengthDirective],
      imports: [FormsModule, ReactiveFormsModule, FubonControlsModule]
    });
  }));

  function createComponent() {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }

  // describe('ngModel', () => {
  //   let selectElm: any;

  //   beforeEach(() => {
  //     TestBed.overrideComponent(HostComponent, {
  //       set: {
  //         template: `
  //             <mat-selection-list #maxlength="ngModel" maxlength maxlength=3>
  //               選單
  //               <mat-list-option [id]="A" [value]="A"> A!! </mat-list-option>
  //               <mat-list-option [id]="B" [value]="B"> B!! </mat-list-option>
  //               <mat-list-option [id]="C" [value]="C"> C!! </mat-list-option>
  //           </mat-selection-list>`
  //       }
  //     });
  //     createComponent();
  //   });

  //   beforeEach(() => {
  //     const select = fixture.debugElement.query(By.css('mat-selection-list[maxlength]'));
  //     selectElm = select.nativeElement;
  //   });

  //   function update(value: string[]) {
  //     selectElm.value = value;
  //     selectElm.dispatchEvent(new Event('mat-selection-list'));
  //     tick();
  //     fixture.detectChanges();
  //   }

  //   it('["A", "B", "C"] should be Maxlength', fakeAsync(() => {
  //     update(['A', 'B', 'C']);
  //     expect(host.maxlengthNgModel.errors).toBeNull();
  //     expect(host.maxlengthNgModel.hasError('maxlength')).toBeFalsy();
  //   }));
  // });

  describe('formControlName', () => {
    let maxlengthControl: AbstractControl;

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `
            <form [formGroup]="form">
              <input formControlName="maxlength" maxlength maxlength=3 />
            </form>
          `
        }
      });
      createComponent();
    });

    beforeEach(() => {
      maxlengthControl = host.form.get('maxlength');
    });

    function update(value: string[]) {
      maxlengthControl.setValue(value);
    }

    it('["A", "B", "C"] should be Maxlength', () => {
      update(['A', 'B', 'C']);
      expect(maxlengthControl.errors).toBeNull();
      expect(maxlengthControl.hasError('maxlength')).toBeFalsy();
    });
  });

  describe('formControl', () => {
    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `<input [formControl]="maxlengthControl" maxlength maxlength=3 />`
        }
      });
      createComponent();
    });

    function update(value: string[]) {
      host.maxlengthControl.setValue(value);
    }

    it('["A", "B", "C"] should be Maxlength', () => {
      update(['A', 'B', 'C']);
      expect(host.maxlengthControl.errors).toBeNull();
      expect(host.maxlengthControl.hasError('maxlength')).toBeFalsy();
    });
  });
});
