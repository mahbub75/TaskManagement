import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../core/models/task.interface';
import {EditTaskComponent} from "../edit-task/edit-task.component";
import {MatDialog} from "@angular/material/dialog";
import {TaskService} from "../task.service";
import {BaseComponent} from "../../core/components/base/base.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent extends BaseComponent implements OnInit {
  @Input() task?: Task;
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();

  constructor(public dialog: MatDialog, private taskService: TaskService, private _snackBar: MatSnackBar) {
    super();
  }

  ngOnInit(): void {
  }

  onEditTask(task: Task) {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '300px',
      panelClass: 'dialog',
      data: {task: task},
    });
this.subscriptions.push(
  dialogRef.afterClosed().subscribe((editedTask: Task) => {
    this._snackBar.open('Successfully edited.','',{panelClass:'successful-notification'});
  })
)
  }

  onDeleteTask(taskId: string) {
    this.deleteTask.emit(taskId);
  }
}

