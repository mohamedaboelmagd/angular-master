import { NgRedux } from 'ng2-redux';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { AppState } from '../store';
import { ADDED_ITEM } from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  // Read the comment in TodoService
  constructor(private service: TodoService, private ngRedux: NgRedux<AppState>) {
  }

  addTodo(input) {
    if (!input.value) return;

    // this.service.addTodo(input.value);

    input.value = '';
    this.ngRedux.dispatch({ type: ADDED_ITEM });
  }

  toggleTodo(todo) {
    this.service.toggleTodo(todo);
  }

  removeTodo(todo) {
    this.service.removeTodo(todo);
  }
}
