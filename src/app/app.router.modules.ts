import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },

  // ... other routes

  { path: '*', component: ErrorPageComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
