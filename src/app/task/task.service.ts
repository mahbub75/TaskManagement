import {Injectable} from '@angular/core';
import {Task} from '../core/models/task.interface'
import {TaskRepo} from "./task-repo";
import {Observable, of} from "rxjs";

@Injectable()
export class TaskService {

  constructor(private taskRepo: TaskRepo) {
  }

  getTasks(userId: string): Observable<Map<string, Task[]>> {
    return this.taskRepo.taskList(userId);
  }

  deleteTask(taskList: Task[], taskId: string): Observable<boolean> {
    const task = taskList.find(item => item.id === taskId);
    if (task) {
      const taskIndex = taskList.indexOf(task!);
      taskList.splice(taskIndex, 1);
      return of(true);
    } else {
      return of(false)
    }

  }

}
