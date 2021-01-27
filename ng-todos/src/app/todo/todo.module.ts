import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [TodosComponent, TodoDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class TodoModule { }
