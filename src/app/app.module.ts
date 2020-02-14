import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { MainComponent } from './page/main/main.component';
import { FooterComponent } from './page/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { appRouting } from './app.router.modules';
import { MaterialModule } from './material.module';

/** Table Show */
import { ShowDataComponent } from './page/main/show-data/show-data.component';
import { PaginationComponent } from './page/main/pagination/pagination.component';
import { MainDataComponent } from './page/main/main-data/main-data.component';
import { MainData2Component } from './page/main/main-data2/main-data2.component';

/** Filter UI */
import { FilterUIComponent } from './page/main/filter-ui/filter-ui.component';
import { DatePickerFilterComponent } from './page/main/filter-ui/date-picker-filter/date-picker-filter.component';
import { InputFilterComponent } from './page/main/filter-ui/input-filter/input-filter.component';
import { TimePickerFilterComponent } from './page/main/filter-ui/time-picker-filter/time-picker-filter.component';
import { InputMailFilterComponent } from './page/main/filter-ui/input-filter/input-mail-filter/input-mail-filter.component';
import { DropDownListFilterComponent } from './page/main/filter-ui/drop-down-list-filter/drop-down-list-filter.component';
import { CheckBoxFilterComponent } from './page/main/filter-ui/check-box-filter/check-box-filter.component';
import { RadioButtonFilterComponent } from './page/main/filter-ui/radio-button-filter/radio-button-filter.component';
import { SlideFilterComponent } from './page/main/filter-ui/slide-toggle-filter/slide-toggle-filter.component';
import { TreeFilterComponent } from './page/main/filter-ui/tree-filter/tree-filter.component';
import { EditDataSourceComponent } from './page/main/edit-data-source/edit-data-source.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ErrorPageComponent,

    /** Table Show */
    ShowDataComponent,
    PaginationComponent,
    MainDataComponent,
    MainData2Component,

    /** Filter UI */
    FilterUIComponent,
    DatePickerFilterComponent,
    InputFilterComponent,
    TimePickerFilterComponent,
    InputMailFilterComponent,
    DropDownListFilterComponent,
    CheckBoxFilterComponent,
    RadioButtonFilterComponent,
    SlideFilterComponent,
    TreeFilterComponent,
    EditDataSourceComponent
  ],
  imports: [
    appRouting,
    MaterialModule,

    FormsModule,
    BrowserModule,
    ReactiveFormsModule,  // 要使用 FormsControll 需要引入的 Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
