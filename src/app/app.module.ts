import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { MainComponent } from './page/main/main.component';
import { FooterComponent } from './page/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { appRouting } from './app.router.modules';
import { FilterUIComponent } from './page/main/filter-ui/filter-ui.component';
import { ShowDataComponent } from './page/main/show-data/show-data.component';
import { PaginationComponent } from './page/main/pagination/pagination.component';
import { MainDataComponent } from './page/main/main-data/main-data.component';
import { MainData2Component } from './page/main/main-data2/main-data2.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { DatePickerFilterComponent } from './page/main/filter-ui/date-picker-filter/date-picker-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ErrorPageComponent,
    FilterUIComponent,
    ShowDataComponent,
    PaginationComponent,
    MainDataComponent,
    MainData2Component,
    DatePickerFilterComponent
  ],
  imports: [
    appRouting,

    FormsModule,
    BrowserModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
