import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';

const routes: Routes = [
  {
    path: '',
    component: TaskComponent,
  }
];


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicComponentsModule
  ]
})
export class TaskModule { }
