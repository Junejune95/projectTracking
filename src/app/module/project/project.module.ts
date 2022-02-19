import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';



import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { FeatureFormComponent } from './feature-form/feature-form.component';
import { PhaseFormComponent } from './phase-form/phase-form.component';
import { ProjectMaterial } from './project-material.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path:'create',
    component:ProjectCreateComponent
  }
];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    BasicInfoFormComponent,
    FeatureFormComponent,
    PhaseFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectMaterial
  ]
})
export class ProjectModule { }
