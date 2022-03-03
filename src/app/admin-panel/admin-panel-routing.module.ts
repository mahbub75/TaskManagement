import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPanelRoutingModule { }
