import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from 'src/app/model/task';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css'],
})
export class MainBoardComponent implements OnInit {
  currentDragTask: any;

  newTaskForm!: FormGroup;
  duplicateTaskError: string = '';
  editTaskIndex!: any;
  isEditMode: boolean = false;

  tasks: ITask[] = [
    {
      title: 'kanban-001',
      description: 'Layout Page',
      status: 'In Progress',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-002',
      description: 'Change button',
      status: 'In Progress',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-00',
      description: 'Reset Password',
      status: 'In Progress',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-004',
      description: 'home Page',
      status: 'open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-005',
      description: 'Reset Password xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      status: 'Open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-006',
      description: 'home Page',
      status: 'open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-007',
      description: 'Reset Password',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-008',
      description: 'home Page',
      status: 'open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-009',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-010',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-011',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-012',
      description: 'Reset Password',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-013',
      description: 'home Page',
      status: 'open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-014',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-015',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-016',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-017',
      description: 'Reset Password',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-018',
      description: 'home Page',
      status: 'open',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-019',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-020',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-021',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-022',
      description: 'home Page',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-019',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-020',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-021',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-022',
      description: 'home Page',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-019',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-020',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-021',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-022',
      description: 'home Page',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-019',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-020',
      description: 'home Page',
      status: 'Pending',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-021',
      description: 'Reset Password',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
    {
      title: 'kanban-022',
      description: 'home Page',
      status: 'Completed',
      dueDate: Date.now().toLocaleString(),
    },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.newTaskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  addTask(title: string) {
    const existingTask = this.tasks.find((task) => task.title == title);
    if (existingTask) {
      this.duplicateTaskError = 'Task already exists!';
    } else {
      this.tasks.push({
        title: this.newTaskForm.value.title,
        description: this.newTaskForm.value.description,
        status: 'Open',
        dueDate: this.newTaskForm.value.dueDate,
      });
      this.duplicateTaskError = '';
      this.newTaskForm.reset();
    }
  }

  deleteTask(title: string) {
    const index = this.tasks.findIndex((task) => task.title === title);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  onEdit(task: ITask, title: string) {
    const index = this.tasks.findIndex((task) => task.title === title);
    this.editTaskIndex = index;
    if (index !== -1) {
      this.newTaskForm.controls['title'].setValue(task.title);
      this.newTaskForm.controls['description'].setValue(task.description);
      this.newTaskForm.controls['dueDate'].setValue(task.dueDate);
      this.isEditMode = true;
    }
  }

  updateTask(title: string) {
    const existingTask = this.tasks.find((task) => task.title == title);
    if (existingTask) {
      this.duplicateTaskError = 'Task already exists!';
    } else {
      // this.tasks.push({
      //   title: this.newTaskForm.value.title,
      //   description: this.newTaskForm.value.description,
      //   status: 'Open',
      //   dueDate: Date.now().toLocaleString(),
      // });
      (this.tasks[this.editTaskIndex].title = this.newTaskForm.value.title),
        (this.tasks[this.editTaskIndex].description =
          this.newTaskForm.value.description),
        (this.tasks[this.editTaskIndex].dueDate =
          this.newTaskForm.value.dueDate),
        (this.duplicateTaskError = '');

      this.newTaskForm.reset();
      this.editTaskIndex = undefined;
      this.isEditMode = false;
    }
  }

  filterTasks(status: string) {
    return this.tasks.filter((task) => task.status === status);
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
    const record = this.tasks.find(
      (task) => task.title == this.currentDragTask.title
    );
    if (record) {
      record.status = status;
    }
    this.currentDragTask = null;
  }
}
