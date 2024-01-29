import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { ITask } from './model/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webRequestService: WebRequestService) {}

  createTask(task: ITask) {
    // we want to send a web request to create task
    return this.webRequestService.post('tasks', task);
  }

  getTasks(): any {
    return this.webRequestService.get('tasks');
  }
}
