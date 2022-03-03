import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskListComponent} from "./task-list/task-list.component";
import {EditTaskComponent} from "./edit-task/edit-task.component";

const routes: Routes = [
  {
    path: 'task-list',
    component: TaskListComponent
  },
  {
    path: 'edit-task',
    component: EditTaskComponent
  },
  {
    path: '',
    redirectTo: 'task-list',
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
