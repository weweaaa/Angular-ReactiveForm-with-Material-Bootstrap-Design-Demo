import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainComponent } from './page/main/main.component';

export const appRoutes: Routes = [
  {
    path: '', children: [
      // { path: 'main1', component: MainDataComponent },
      // { path: 'main2', component: MainData2Component },
      // { path: '**', component: ErrorPageComponent }
    ]
  },

  // ... other routes

  { path: '**', component: ErrorPageComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
