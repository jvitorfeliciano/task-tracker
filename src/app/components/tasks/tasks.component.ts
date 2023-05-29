import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service.getTasks().subscribe({
      next: (res) => {
        this.tasks = res;
      },
      error: (err) => console.log(err),
    });
  }
}
