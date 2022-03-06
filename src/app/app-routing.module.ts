import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {TaskGuard} from "./task/task.guard";
import {AdminPanelGuard} from "./admin-panel/admin-panel.guard";
import {adminModulePath, loginPath, taskModulePath} from "./core/routs-constant";

const routes: Routes = [
  {
    path: taskModulePath + '/:userId',
    loadChildren: () =>
      import('./task/task.module').then((mod) => mod.TaskModule),
    data: { applyPreload: true },
    canActivate: [TaskGuard]
  },
  {
    path: adminModulePath,
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then((mod) => mod.AdminPanelModule),
    data: { applyPreload: true },
    canActivate: [AdminPanelGuard]
  },
  {
  path: loginPath,
  loadChildren: () =>
    import('./login/login.module').then((mod) => mod.LoginModule),
  data: { applyPreload: true },
},
  { path: '', redirectTo: loginPath, pathMatch: 'full'},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
