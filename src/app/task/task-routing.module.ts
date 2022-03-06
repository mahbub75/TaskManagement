import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {taskListPath} from "../core/routs-constant";

const routes: Routes = [
  {
    path: taskListPath,
    component: TaskListComponent
  },
  {
    path: '',
    redirectTo: taskListPath,
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskRoutingModule { }
