import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {dashboardPath} from "../core/routs-constant";

const routes: Routes = [
  {
    path: dashboardPath,
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: dashboardPath,
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
