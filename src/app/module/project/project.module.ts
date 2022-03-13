import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';




import { ProjectCreateComponent } from './project-create/project-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoFormComponent } from './forms/basic-info-form/basic-info-form.component';
import { FeatureFormComponent } from './forms/feature-form/feature-form.component';
import { PhaseFormComponent } from './forms/phase-form/phase-form.component';
import { ProjectMaterial } from './project-material.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FeatureDetailComponent } from './details/feature-detail/feature-detail.component';
import { PhaseDetailComponent } from './details/phase-detail/phase-detail.component';
import { PaymentDetailComponent } from './details/payment-detail/payment-detail.component';

import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path:'create',
    component:ProjectCreateComponent
  },
  {
    path:'detail/:projectId',
    component:ProjectDetailComponent
  }
];

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCreateComponent,
    BasicInfoFormComponent,
    FeatureFormComponent,
    PhaseFormComponent,
    ProjectDetailComponent,
    FeatureDetailComponent,
    PhaseDetailComponent,
    PaymentDetailComponent
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
