import { NgModule } from '@angular/core';
import { MatDialogModule, MatTableModule, MatFormFieldModule,
         MatDatepickerModule, MatNativeDateModule, MatInputModule
       } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    MatTableModule,
    MatDialogModule,

    MatInputModule,
    MatFormFieldModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,

    BrowserAnimationsModule,
  ],
  providers: [
  ]
})
export class MaterialModule { }
