import {Component, OnInit} from '@angular/core';
import {Task} from '../../core/models/task.interface'
import {Observable} from "rxjs";
import {AuthenticationService} from "../../core/services/authentication.service";
import {TaskService} from "../task.service";
import {TaskRepo} from "../task-repo";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {BaseComponent} from "../../core/components/base/base.component";
import {tap} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent extends BaseComponent implements OnInit {
  tasks?: Observable<Map<string, Task[]>> ;
  userId!: string;

  constructor(
    private authService: AuthenticationService,
    private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    super();
    this.userId = activatedRoute.snapshot.paramMap.get('userId') || '';
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(this.userId);

  }

  onDrop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      this._moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


  private _moveItemInArray(array: any[], previousIndex: number, currentIndex: number): void {
    moveItemInArray(array, previousIndex, currentIndex);
  }

  onDeleteTask(taskList: Task[], taskId: string): void {
    this.subscriptions.push(
      this.taskService.deleteTask(taskList, taskId).subscribe(isDeleted=>{
        if (isDeleted){
          this._snackBar.open('Successfully deleted.','',{panelClass:'successful-notification'});
        } else {
          this._snackBar.open('Delete failed.','',{panelClass:'error-notification'});
        }
      })
    )
  }


}
