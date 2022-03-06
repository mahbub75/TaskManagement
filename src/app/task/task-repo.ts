import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Task} from '../core/models/task.interface'

@Injectable()
export class TaskRepo {
  constructor(private http: HttpClient,) {
  }

  taskList(userId: string): Observable<Map<string, Task[]>> {
    const url = userId === '1' ? 'assets/task-list1.json' : 'assets/task-list2.json';
    return this.http.get(url).pipe(
      map(res => res as Map<string, Task[]>)
    )
  }
}
