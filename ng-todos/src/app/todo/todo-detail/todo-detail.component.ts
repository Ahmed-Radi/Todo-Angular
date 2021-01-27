import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  todo: any;
  constructor(private route:ActivatedRoute,private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodo();
  }
  getTodo():void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(id!);
  }
}
