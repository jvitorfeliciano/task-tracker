import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  count = 0;
  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error: (err) => console.log(err),
    });
  }

  deleteTask(task: Task) {
    this.service.deleteTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
    });
  }
}
