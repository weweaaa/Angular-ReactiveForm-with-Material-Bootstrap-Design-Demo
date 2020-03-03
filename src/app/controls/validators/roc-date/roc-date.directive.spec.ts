// import { Component, ViewChild } from '@angular/core';
// import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { AbstractControl, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { RocDateDirective } from './roc-date.directive';

// @Component({ selector: 'fub-host-comp' })
// class HostComponent {
//   @ViewChild('rocDate') rocDateNgModel: NgModel;
//   form = new FormGroup({
//     rocDate: new FormControl('')
//   });
//   rocDateControl = new FormControl('');
// }

// describe('RocDateDirective', () => {
//   let fixture: ComponentFixture<HostComponent>;
//   let host: HostComponent;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [HostComponent, RocDateDirective],
//       imports: [FormsModule, ReactiveFormsModule]
//     });
//   }));

//   function createComponent() {
//     fixture = TestBed.createComponent(HostComponent);
//     host = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//   }

//   describe('ngModel', () => {
//     let selectElm: HTMLSelectElement;

//     beforeEach(() => {
//       TestBed.overrideComponent(HostComponent, {
//         set: {
//           template: `<input #taxIdNumber="ngModel" type="text" ngModel rocDate />`
//         }
//       });
//       createComponent();
//     });

//     beforeEach(() => {
//       const select = fixture.debugElement.query(By.css('input[rocDate]'));
//       selectElm = select.nativeElement;
//     });

//     function update(value: string) {
//       selectElm.value = value;
//       selectElm.dispatchEvent(new Event('input'));
//       tick();
//       fixture.detectChanges();
//     }

//     it('2020/03/02 should be rocDate', fakeAsync(() => {
//       update('2020/03/02');
//       expect(host.rocDateNgModel.errors).toBeNull();
//       expect(host.rocDateNgModel.hasError('rocDate')).toBeFalsy();
//     }));
//   });

//   describe('formControlName', () => {
//     let rocDateControl: AbstractControl;

//     beforeEach(() => {
//       TestBed.overrideComponent(HostComponent, {
//         set: {
//           template: `
//             <form [formGroup]="form">
//               <input formControlName="rocDate" rocDate />
//             </form>
//           `
//         }
//       });
//       createComponent();
//     });

//     beforeEach(() => {
//       rocDateControl = host.form.get('rocDate');
//     });

//     function update(value: string) {
//       rocDateControl.setValue(value);
//     }

//     it('2020/03/02 should be rocDate', () => {
//       update('2020/03/02');
//       expect(rocDateControl.errors).toBeNull();
//       expect(rocDateControl.hasError('rocDate')).toBeFalsy();
//     });
//   });

//   describe('formControl', () => {
//     beforeEach(() => {
//       TestBed.overrideComponent(HostComponent, {
//         set: {
//           template: `<input [formControl]="rocDateControl" rocDate />`
//         }
//       });
//       createComponent();
//     });

//     function update(value: string) {
//       host.rocDateControl.setValue(value);
//     }

//     it('2020/03/02 should be rocDate', () => {
//       update('2020/03/02');
//       expect(host.rocDateControl.errors).toBeNull();
//       expect(host.rocDateControl.hasError('rocDate')).toBeFalsy();
//     });
//   });
// });
