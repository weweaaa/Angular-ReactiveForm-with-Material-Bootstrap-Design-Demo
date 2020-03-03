import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaxlengthDirective } from './maxlength.directive';

@Component({ selector: 'fub-host-comp' })
class HostComponent {
  @ViewChild('tMySelect') tMySelectNgModel: NgModel;
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
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatListModule,
        MatSelectModule,
        BrowserModule,
        BrowserAnimationsModule]
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
                  <mat-selection-list #tMySelect="ngModel" ngModel name="mySelect" [maxlength]="2" >
                      選單
                      <mat-list-option id="A" value="A"> A!! </mat-list-option>
                      <mat-list-option id="B" value="B"> B!! </mat-list-option>
                      <mat-list-option id="C" value="C"> C!! </mat-list-option>
                  </mat-selection-list>

                <p style="color: red;">
                    Options selected: {{tMySelect.selectedOptions?.selected.length}}
                  </p>
            `
        }
      });
      createComponent();
    });

    beforeEach(() => {
      const options = fixture.debugElement.queryAll(By.css('mat-list-option'));
      optionElms = options.map<HTMLElement>(x => x.nativeElement);
    });

    function update(values: string[]) {
      for (const optionElm of optionElms) {
        if (values.includes(optionElm.id)) {
          optionElm.click();
          tick();
          fixture.detectChanges();
        }
      }
    }

    it('["A", "C"] should be 2 Maxlength', fakeAsync(() => {
      update(['A', 'C']);
      expect(host.tMySelectNgModel.errors).toBeNull();
      expect(host.tMySelectNgModel.hasError('maxlength')).toBeFalsy();
    }));

    it('["A", "B", "C"] should not be 3 Maxlength', fakeAsync(() => {
      update(['A', 'B', 'C']);
      expect(host.tMySelectNgModel.errors).toEqual({ maxlength: { requiredLength: 2, actualLength: 3 } });
      expect(host.tMySelectNgModel.hasError('maxlength')).toBeTruthy();
    }));
  });

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
