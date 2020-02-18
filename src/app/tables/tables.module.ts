import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableManagerComponent } from './table-manager/table-manager.component';
import { MaterialModule } from '../controls/material.module';
import { PaginatorComponent } from './table-manager/paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [TableManagerComponent, PaginatorComponent],
  exports: [TableManagerComponent],
  imports: [
    CommonModule,
    MaterialModule,

    /** 資料表分頁需要引用的模組，否則無法看到 */
    BrowserAnimationsModule
  ]
})
export class TablesModule { }
