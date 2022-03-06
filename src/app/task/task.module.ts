import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {TaskRoutingModule} from "./task-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TaskGuard} from "./task.guard";
import {TaskService} from "./task.service";
import {TaskRepo} from "./task-repo";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskCardComponent,
    EditTaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    DragDropModule,
    TaskRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule
  ],
  providers: [TaskService, TaskRepo, TaskGuard]
})
export class TaskModule { }
