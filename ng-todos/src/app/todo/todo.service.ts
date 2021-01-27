import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODOS } from './mok-todos';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodos(): Todo[]{
    return TODOS;
  }
  getTodo(id: string): any{
    return TODOS.find(todo => todo._id === id);
  }
}
