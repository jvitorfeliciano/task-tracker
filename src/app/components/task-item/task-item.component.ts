import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {
    console.log(this.task);
  }

  onDelete(task: Task | undefined) {
    this.onDeleteTask.emit(task); // emit the event to the parent;
  }
}
