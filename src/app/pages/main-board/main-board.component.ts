import { Component } from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css'],
})
export class MainBoardComponent {
  currentDragTask: any;

  tasksArray: any[] = [
    {
      taskId: 'kanban-001',
      taskName: 'Layout Page',
      status: 'In Progress',
    },
    {
      taskId: 'kanban-002',
      taskName: 'Change button',
      status: 'In Progress',
    },
    {
      taskId: 'kanban-003',
      taskName: 'Reset Password',
      status: 'In Progress',
    },
    {
      taskId: 'kanban-004',
      taskName: 'home Page',
      status: 'open',
    },
    {
      taskId: 'kanban-005',
      taskName: 'Reset Password',
      status: 'Open',
    },
    {
      taskId: 'kanban-006',
      taskName: 'home Page',
      status: 'open',
    },
    {
      taskId: 'kanban-007',
      taskName: 'Reset Password',
      status: 'Pending',
    },
    {
      taskId: 'kanban-008',
      taskName: 'home Page',
      status: 'open',
    },
    {
      taskId: 'kanban-009',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-010',
      taskName: 'home Page',
      status: 'Pending',
    },
    {
      taskId: 'kanban-011',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-012',
      taskName: 'Reset Password',
      status: 'Pending',
    },
    {
      taskId: 'kanban-013',
      taskName: 'home Page',
      status: 'open',
    },
    {
      taskId: 'kanban-014',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-015',
      taskName: 'home Page',
      status: 'Pending',
    },
    {
      taskId: 'kanban-016',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-017',
      taskName: 'Reset Password',
      status: 'Pending',
    },
    {
      taskId: 'kanban-018',
      taskName: 'home Page',
      status: 'open',
    },
    {
      taskId: 'kanban-019',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-020',
      taskName: 'home Page',
      status: 'Pending',
    },
    {
      taskId: 'kanban-021',
      taskName: 'Reset Password',
      status: 'Completed',
    },
    {
      taskId: 'kanban-022',
      taskName: 'home Page',
      status: 'Completed',
    },
  ];

  filterTasks(status: string) {
    return this.tasksArray.filter((task) => task.status === status);
  }

  onDragStart(task: any) {
    console.log('drag start');
    this.currentDragTask = task;
  }
  onDragOver(event: any) {
    console.log('drag over');
    event.preventDefault();
  }
  onDrop(event: any, status: string) {
    event.preventDefault();
    console.log('drop');
    const record = this.tasksArray.find(
      (task) => task.taskId == this.currentDragTask.taskId
    );
    if (record) {
      record.status = status;
    }
    this.currentDragTask = null;
  }
}
