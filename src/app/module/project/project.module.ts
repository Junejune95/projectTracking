import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, Routes } from '@angular/router';

// material module
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree';

import { BasicComponentsModule } from 'app/shared/basic-components/basic-components.module';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicInfoFormComponent } from './basic-info-form/basic-info-form.component';
import { FeatureFormComponent } from './feature-form/feature-form.component';

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
    FeatureFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BasicComponentsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatStepperModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
