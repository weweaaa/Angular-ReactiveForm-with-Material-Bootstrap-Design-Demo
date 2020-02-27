import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { FooterComponent } from './page/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { appRouting } from './app.router.modules';

import { ControlsModule } from './controls/controls.module';
import { TablesModule } from './tables/tables.module';
import { HeaderComponent } from './page/header/header.component';
import { FormManagerDemoComponent } from './page/main/form-manager-demo/form-manager-demo.component';
import { TableManagerDemoComponent } from './page/main/table-manager-demo/table-manager-demo.component';
import { FilterTableManagerDemoComponent } from './page/main/filter-table-manager-demo/filter-table-manager-demo.component';
import { AllManagerDemoComponent } from './page/main/all-manager-demo/all-manager-demo.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    ErrorPageComponent,
    HeaderComponent,
    FormManagerDemoComponent,
    TableManagerDemoComponent,
    FilterTableManagerDemoComponent,
    AllManagerDemoComponent,
  ],
  imports: [
    appRouting,

    BrowserModule,

    /* 自訂封裝模組 */
    ControlsModule,
    TablesModule,

    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
