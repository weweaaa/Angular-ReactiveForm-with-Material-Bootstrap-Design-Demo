import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { KeydownInputComponent } from './type/keydown-input/keydown-input.component';
import { CheckBoxComponent } from './type/check-box/check-box.component';
import { TimePickerComponent } from './type/time-picker/time-picker.component';
import { DatePickerComponent } from './type/date-picker/date-picker.component';
import { RadioButtonComponent } from './type/radio-button/radio-button.component';
import { SlideToggleComponent } from './type/slide-toggle/slide-toggle.component';
import { DropDownListComponent } from './type/drop-down-list/drop-down-list.component';
import { DialogFormControlsComponent } from './dialog-form-controls/dialog-form-controls.component';
import { MultipleDropDownListComponent } from './type/multiple-drop-down-list/multiple-drop-down-list.component';
import { CheckBoxListComponent } from './type/check-box-list/check-box-list.component';



@NgModule({
  declarations: [
    FormControlsComponent,
    KeydownInputComponent,
    CheckBoxComponent,
    TimePickerComponent,
    DatePickerComponent,
    RadioButtonComponent,
    SlideToggleComponent,
    DropDownListComponent,
    DialogFormControlsComponent,
    MultipleDropDownListComponent,
    CheckBoxListComponent
  ],
  exports: [FormControlsComponent, DialogFormControlsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ControlsModule { }
