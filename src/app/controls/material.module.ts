import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


/** 自訂時間顯示格式 */
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  exports: [
    /** Table */
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,

    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,

    /** DatePicker */
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    BrowserAnimationsModule,

    /** Checkbox */
    MatCheckboxModule,
    MatListModule,

    /** Tree Checkbox */
    MatTreeModule,

    /** Slide-Toggl */
    MatSlideToggleModule,

    /** Radio Button */
    MatRadioModule,

    /** TimePicker */
    MatIconModule,
    NgxMaterialTimepickerModule,

    /** Demo 引用
     * 補充：從 Material 9.0.0 開始，引用模組，如果使用 '@angular/material' 的方式引用，會有異常訊息 ==> node_modules/@angular/material/index.d.ts' 不是模組。
     * 修正方式：改為引用模組對應的目錄層級，例如：'@angular/material/stepper'
     * 參考來源：https://github.com/angular/components/issues/17503
     */
    MatStepperModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class MaterialModule { }
