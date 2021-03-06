import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogFormControlsComponent } from './dialog-form-controls/dialog-form-controls.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { MaterialModule } from './material.module';
import { CheckBoxListComponent } from './type/check-box-list/check-box-list.component';
import { CheckBoxComponent } from './type/check-box/check-box.component';
import { DatePickerComponent } from './type/date-picker/date-picker.component';
import { DropDownListComponent } from './type/drop-down-list/drop-down-list.component';
import { KeydownInputComponent } from './type/keydown-input/keydown-input.component';
import { MultipleDropDownListComponent } from './type/multiple-drop-down-list/multiple-drop-down-list.component';
import { RadioButtonComponent } from './type/radio-button/radio-button.component';
import { SlideToggleComponent } from './type/slide-toggle/slide-toggle.component';
import { TimePickerComponent } from './type/time-picker/time-picker.component';



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
  exports: [FormControlsComponent, DialogFormControlsComponent, MaterialModule],
  imports: [

    // 因為 controls 模組是獨立出來的，所以如果有模組要使用，記得要在 controls.moduls 內引用
    // 如果是在 app.module 引用，則這裡是無法使用到 app.module 內所以引用的套件的
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ControlsModule { }
