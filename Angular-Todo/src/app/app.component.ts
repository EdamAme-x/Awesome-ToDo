import { Component, SimpleChange } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public todos: TodosService) {}

  title = 'awesome';

  toggleCheck(index: number) {
    this.todos.todos[index].check = !this.todos.todos[index].check;
  }

  deleteTodo(index: number) {
    this.todos.todos = this.todos.todos.filter((n, i) => i !== index);;
  }

  add(title: string) {
    this.todos.todos.push({
      title,
      check: false,
    });
  }
}
