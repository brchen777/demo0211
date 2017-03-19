import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done???';
  todos: any[] = [];
  todo;

  constructor(private http: Http) {
  }

  add(item: HTMLInputElement) {
    this.todos = [...this.todos, {
      value: item.value,
      done: false
    }];

    item.value = '';
  }

  remove(item) {
    let idx = this.todos.indexOf(item);
    this.todos.splice(idx, 1);

    this.todos = [...this.todos];
  }

  clearCompleted() {
    this.todos = this.todos.filter(v => !v.done);
  }

  toggleAll(status: boolean) {
    this.todos = this.todos.map(v => {
      v.done = status;
      return v;
    });
  }
}
