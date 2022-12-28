import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { SCComponent } from './sc.component';


const routes: Routes = [
  {
    path: '',
    component: SCComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'task/add-task', component: AddTaskComponent, canActivate: [AuthGuard] },
      { path: 'task/add-task/:id', component: AddTaskComponent, canActivate: [AuthGuard] },
      { path: 'task/list-task', component: ListTaskComponent, canActivate: [AuthGuard] },
   
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SCRoutingModule { }