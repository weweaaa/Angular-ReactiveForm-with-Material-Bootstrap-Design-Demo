import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableManagerComponent } from './table-manager/table-manager.component';
import { MaterialModule } from '../controls/material.module';



@NgModule({
  declarations: [TableManagerComponent],
  exports: [TableManagerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TablesModule { }
