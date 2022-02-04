import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  }
];

@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicComponentsModule

  ]
})
export class ProjectModule { }
