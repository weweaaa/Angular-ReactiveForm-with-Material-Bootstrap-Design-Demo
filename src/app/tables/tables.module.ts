import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableManagerComponent } from './table-manager/table-manager.component';
import { MaterialModule } from '../controls/material.module';
import { PaginatorComponent } from './table-manager/paginator/paginator.component';



@NgModule({
  declarations: [TableManagerComponent, PaginatorComponent],
  exports: [TableManagerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TablesModule { }
