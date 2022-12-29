import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../common/shared/shared.module";
import { BasePipeModule } from "../common/pipes/base.pipe.module";
import { SCRoutingModule } from './sc-routing.module';
import { SCComponent } from './sc.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { SCService } from './sc.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { ListNewTaskComponent } from './task/list-new-task/list-new-task.component';

@NgModule({
  declarations: [
    SCComponent,
    AddTaskComponent,
    AddTaskComponent,
    ListTaskComponent,
    ListNewTaskComponent,
  ],
  imports: [
    CommonModule,
    SCRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BasePipeModule,
    NgSelectModule
  ],
  providers: []
})
export class SCModule { }
