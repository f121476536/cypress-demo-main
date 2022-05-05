import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListViewComponent } from './todolist/component';

const routes: Routes = [
  {path: 'all',component: TodoListViewComponent},
  {path: 'open',component: TodoListViewComponent},
  {path: 'done',component: TodoListViewComponent},
  {path: '**', redirectTo: '/all'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
