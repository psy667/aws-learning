import {Component, OnInit} from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aws-learn';
  response = [];
  todos: Array<any>;

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });

    this.apiService.OnUpdateTodoListener.subscribe((evt) => {
      const data = (evt as any).value.data.onUpdateTodo;
      this.todos = this.todos.map(item => item.id === data.id ? data : item);
    });
  }

  createTodo() {
    this.apiService.CreateTodo({
      name: 'Angular',
      description: 'testing',
      checked: false
    });
  }

  checkTodo(id, $event) {
    const value = $event.target.checked;

    this.apiService.UpdateTodo({
      id,
      checked: value
    });
  }
}
