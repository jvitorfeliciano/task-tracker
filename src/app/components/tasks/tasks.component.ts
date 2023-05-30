import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  subscription: Subscription;
  showAddTask: boolean = false;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe({
      next: (res) => {
        this.tasks = res;
        console.log(this.tasks);
      },
      error: (err) => console.log(err),
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.log(err),
    });
  }
}
