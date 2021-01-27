import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import {TodosComponent} from './todo/todos/todos.component'
const routes: Routes = [
  {path:'',redirectTo:'/todos',pathMatch:'full'},
  {path:'todos',component: TodosComponent},
  {path:'todos/:id',component: TodoDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
