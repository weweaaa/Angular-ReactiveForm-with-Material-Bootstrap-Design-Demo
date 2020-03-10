import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AllManagerDemoComponent } from './page/main/all-manager-demo/all-manager-demo.component';
import { FilterTableManagerDemoComponent } from './page/main/filter-table-manager-demo/filter-table-manager-demo.component';
import { FormManagerDemoComponent } from './page/main/form-manager-demo/form-manager-demo.component';
import { BasicComponent } from './page/main/form-manager-demo/menu/basic/basic.component';
import { BookmarkComponent } from './page/main/form-manager-demo/menu/bookmark/bookmark.component';
import { ElfModeComponent } from './page/main/form-manager-demo/menu/elf-mode/elf-mode.component';
import { TableManagerDemoComponent } from './page/main/table-manager-demo/table-manager-demo.component';

export const appRoutes: Routes = [
  {
    path: '', children: [
      { path: '', component: FormManagerDemoComponent },
      {
        path: 'form-manager-demo',
        component: FormManagerDemoComponent,
        children: [
          { path: 'basic', component: BasicComponent },
          { path: 'bookmark', component: BookmarkComponent },
          { path: 'elfMode', component: ElfModeComponent },
        ]
      },
      { path: 'table-manager-demo', component: TableManagerDemoComponent },
      { path: 'filter-form-manager-demo', component: FilterTableManagerDemoComponent },
      { path: 'all-manager-demo', component: AllManagerDemoComponent },
    ]
  },

  // ... other routes

  { path: '**', component: ErrorPageComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
