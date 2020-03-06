import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting } from './app.router.modules';
import { ControlsModule } from './controls/controls.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './page/footer/footer.component';
import { HeaderComponent } from './page/header/header.component';
import { AllManagerDemoComponent } from './page/main/all-manager-demo/all-manager-demo.component';
import { FilterTableManagerDemoComponent } from './page/main/filter-table-manager-demo/filter-table-manager-demo.component';
import { FormManagerDemoComponent } from './page/main/form-manager-demo/form-manager-demo.component';
import { BasicComponent } from './page/main/form-manager-demo/menu/basic/basic.component';
import { BookmarkComponent } from './page/main/form-manager-demo/menu/bookmark/bookmark.component';
import { ElfModeComponent } from './page/main/form-manager-demo/menu/elf-mode/elf-mode.component';
import { MainComponent } from './page/main/main.component';
import { TableManagerDemoComponent } from './page/main/table-manager-demo/table-manager-demo.component';
import { TablesModule } from './tables/tables.module';


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
    BasicComponent,
    BookmarkComponent,
    ElfModeComponent,
  ],
  imports: [
    appRouting,

    FormsModule,
    BrowserModule,
    ReactiveFormsModule,

    /* 自訂封裝模組 */
    ControlsModule,
    TablesModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
