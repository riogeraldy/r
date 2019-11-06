import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  { path: 'application', loadChildren: './pages/application/application.module#ApplicationPageModule' },
  { path: 'information', loadChildren: './pages/information/information.module#InformationPageModule' },
  { path: 'enter', loadChildren: './pages/enter/enter.module#EnterPageModule' },
  { path: 'management', loadChildren: './pages/management/management.module#ManagementPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
