import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FubonControlsModule } from '../../controls.module';
import { MinlengthDirective } from './minlength.directive';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('minlength') minlengthNgModel: NgModel;
  form = new FormGroup({
    minlength: new FormControl('')
  });
  minlengthControl = new FormControl('');
}

fdescribe('MinlengthDirective', () => {
  let fixture: ComponentFixture<HostComponent>;
  let host: HostComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HostComponent, MinlengthDirective],
      imports: [FormsModule, ReactiveFormsModule, FubonControlsModule]
    });
  }));

  function createComponent() {
    fixture = TestBed.createComponent(HostComponent);
    host = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }

  describe('ngModel', () => {
    let optionElms: HTMLElement[];

    beforeEach(() => {
      TestBed.overrideComponent(HostComponent, {
        set: {
          template: `
              <mat-selection-list #minlength="ngModel" ngModel [minlength]="3" >
                選單
                <mat-list-option id="A" value="A"> A!! </mat-list-option>
                <mat-list-option id="B" value="B"> B!! </mat-list-option>
                <mat-list-option id="C" value="C"> C!! </mat-list-option>
            </mat-selection-list>`
        }
      });
      createComponent();
    });

    beforeEach(() => {
      const options = fixture.debugElement.queryAll(By.css('mat-list-option'));
      optionElms = options.map<HTMLElement>(x => x.nativeElement);
    });

    function update(values: string[]) {
      // selectElm.value = value;
      // selectElm.dispatchEvent(new Event('mat-selection-list'));
      // host.minlengthNgModel.

      for (const optionElm of optionElms) {
        if (values.includes(optionElm.id)) {
          optionElm.click();
          tick();
          fixture.detectChanges();
        }
      }
    }

    it('["A", "B", "C"] should be Minlength', fakeAsync(() => {
      update(['A', 'B', 'C']);
      expect(host.minlengthNgModel.errors).toBeNull();
      expect(host.minlengthNgModel.hasError('minlength')).toBeFalsy();
    }));
  });

  // describe('formControlName', () => {
  //   let minlengthControl: AbstractControl;

  //   beforeEach(() => {
  //     TestBed.overrideComponent(HostComponent, {
  //       set: {
  //         template: `
  //           <form [formGroup]="form">
  //             <input formControlName="minlength" minlength minlength=3 />
  //           </form>
  //         `
  //       }
  //     });
  //     createComponent();
  //   });

  //   beforeEach(() => {
  //     minlengthControl = host.form.get('minlength');
  //   });

  //   function update(value: string[]) {
  //     minlengthControl.setValue(value);
  //   }

  //   it('["A", "B", "C"] should be Minlength', () => {
  //     update(['A', 'B', 'C']);
  //     expect(minlengthControl.errors).toBeNull();
  //     expect(minlengthControl.hasError('minlength')).toBeFalsy();
  //   });
  // });

  // describe('formControl', () => {
  //   beforeEach(() => {
  //     TestBed.overrideComponent(HostComponent, {
  //       set: {
  //         template: `<input [formControl]="minlengthControl" minlength minlength=3 />`
  //       }
  //     });
  //     createComponent();
  //   });

  //   function update(value: string[]) {
  //     host.minlengthControl.setValue(value);
  //   }

  //   it('["A", "B", "C"] should be Minlength', () => {
  //     update(['A', 'B', 'C']);
  //     expect(host.minlengthControl.errors).toBeNull();
  //     expect(host.minlengthControl.hasError('minlength')).toBeFalsy();
  //   });
  // });
});
