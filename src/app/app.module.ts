import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { FooterComponent } from './page/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { appRouting } from './app.router.modules';

import { ControlsModule } from './controls/controls.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    ErrorPageComponent,
  ],
  imports: [
    appRouting,

    BrowserModule,

    /* 自訂封裝模組 */
    ControlsModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
