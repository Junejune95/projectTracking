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
    BasicComponentsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class ProjectModule { }
