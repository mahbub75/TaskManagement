import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {
  path: 'login',
  loadChildren: () =>
    import('./login/login.module').then((mod) => mod.LoginModule),
  data: { applyPreload: true },
},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
