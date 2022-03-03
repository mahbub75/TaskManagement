import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () =>
      import('./task/task.module').then((mod) => mod.TaskModule),
    data: { applyPreload: true },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then((mod) => mod.AdminPanelModule),
    data: { applyPreload: true },
  },
  {
  path: 'login',
  loadChildren: () =>
    import('./login/login.module').then((mod) => mod.LoginModule),
  data: { applyPreload: true },
},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
